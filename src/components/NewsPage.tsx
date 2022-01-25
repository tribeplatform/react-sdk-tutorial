import {useParams} from "react-router-dom";
import {usePost} from "@tribeplatform/react-sdk/hooks";
import {CommentList} from "./CommentList";
import {CommentComposer} from "./CommentComposer";


export const NewsPage = () => {
    const params = useParams()
    const postId = params.postId as string
    const {data: post} = usePost({
        id: postId,
        fields: {
            replies: {
                variables: {
                    limit: 100,
                },
                fields: {
                    createdBy: {
                        member: 'basic'
                    },
                    authMemberProps: 'all',
                }
            }
        }
    })

    return (
        <div className="w-1/2 mx-auto">
            <div className="rounded-lg bg-gray-100 p-5">
                <div className="text-center text-2xl font-bold">
                    {post?.title}
                </div>
                <div dangerouslySetInnerHTML={{__html: post?.shortContent as string}} className="mt-5">
                </div>
            </div>
            <h2 className="text-2xl font-bold mt-5">Comments ({post?.repliesCount ?? 0})</h2>
            <CommentList post={post}/>
            <CommentComposer post={post}/>
        </div>
    )
}