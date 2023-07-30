import { UserPost } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
const UserPostComponent = (post: UserPost) => {
    if (!post.postImageUrl)
    return (
      <div
        key={post.id}
        className="flex w-[468px] max-sm:w-[100%] flex-col border-b"
      >
        <Link
          className="flex flex-row w-[100%] items-left m-2"
          href={`/${post.userId}`}
        >
          <Image
            className="rounded-2xl"
            src={`https://robohash.org/${post.userId}?size=40x40&set=set2`}
            alt={`${post.authorUsername}'s avatar`}
            width={40}
            height={40}
          />
          <p className="p-2">{post.authorUsername}</p>
        </Link>
        <h3 className="max-sm:px-4">{post.postText}</h3>
      </div>
    );

  return (
    <div
      key={post.id}
      className="flex w-[468px] max-sm:w-[100%] flex-col border-b"
    >
      <Link
        className="flex flex-row w-[100%] items-left m-2"
        href={`/${post.userId}`}
      >
        <Image
          className="rounded-2xl"
          src={`https://robohash.org/${post.userId}?size=40x40&set=set2`}
          alt={`${post.authorUsername}'s avatar`}
          width={40}
          height={40}
        />
        <p className="p-2">{post.authorUsername}</p>
      </Link>
      <div className="max-w-[468px] max-sm:max-w-[100%] bg-gray-50 overflow-hidden">
        <img
          src={post.postImageUrl}
          alt={post.postImageUrl}
          className="object-contain w-full h-full max-sm:w-[100%] max max-w-[468px] max-h-[585px]"
        />
      </div>
      <h3 className="text-xl">{post.postText}</h3>
    </div>
  );
};

export default UserPostComponent