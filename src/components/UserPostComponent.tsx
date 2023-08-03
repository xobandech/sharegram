import { UserPost } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
const UserPostComponent = (post: UserPost) => {
  if (!post.base64PostImage)
    return (
      <div key={post.id} className="flex w-[468px] max-sm:w-[100%] flex-col">
        <div className=" border-b">
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
        <div className="flex justify-end text-gray-500 mr-2">
          <h3>{`${post.createdAt.toString().slice(3, 21)}`}</h3>
        </div>
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
        <h3 className="text-xl">{post.postText}</h3>
        <img
          src={post.base64PostImage}
          alt={post.base64PostImage}
          className="object-contain w-full h-full max-sm:w-[100%] max max-w-[468px] max-h-[585px]"
        />
      </div>
      <div className="flex justify-end text-gray-500 mr-2">
          <h3>{`${post.createdAt.toString().slice(3, 21)}`}</h3>
        </div>
    </div>
  );
};

export default UserPostComponent;
