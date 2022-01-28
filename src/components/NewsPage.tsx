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
        <div className="w-full lg:w-1/2 mx-auto my-5">
            <div className="lg:rounded-lg bg-hacker-body p-5">
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