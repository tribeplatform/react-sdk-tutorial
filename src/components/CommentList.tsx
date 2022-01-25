import {Post} from "@tribeplatform/gql-client/types";
import {DeleteNews} from "./DeleteNews";


export const CommentList = ({post}: { post?: Post }) => {
    return (
        <div>
            {post?.replies?.nodes?.map(reply => (
                <div className="rounded-lg bg-gray-100 my-5 px-5 py-2 flex">
                    <div className="flex-grow">
                        <div className="text-xs">{reply.createdBy?.member?.name} says:</div>
                        <div dangerouslySetInnerHTML={{__html: reply.shortContent as string}}/>
                    </div>
                    <DeleteNews post={reply}/>
                </div>
            ))}
        </div>
    )
}