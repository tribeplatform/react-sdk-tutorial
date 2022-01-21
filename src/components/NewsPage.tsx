import {useParams} from "react-router-dom";
import {usePost} from "@tribeplatform/react-sdk/hooks";


export const NewsPage = () => {
    const params = useParams()
    const postId = params.postId as string
    const {data: post} = usePost({
        id: postId
    })

    return (
        <div className="w-1/2 rounded-lg bg-gray-100 mx-auto mt-5 p-5">
            <div className="text-center text-2xl font-bold">
                {post?.title}
            </div>
            <div dangerouslySetInnerHTML={{__html: post?.shortContent as string}} className="mt-5">
            </div>
        </div>
    )
}