import React from 'react';
import {useFeed} from "@tribeplatform/react-sdk/hooks";
import {simplifyPaginatedResult} from "@tribeplatform/react-sdk/utils";
import {Post} from "@tribeplatform/gql-client/types";

function App() {
    const {data} = useFeed({
        fields: 'basic',
        variables: {
            limit: 100,
        }
    })
    const {nodes: posts} = simplifyPaginatedResult<Post>(data)

    return (
        <div className="w-3/4 m-auto flex flex-col gap-5">
            {posts.map((post, i) => (
                <div className="flex gap-2 bg-gray-100 rounded-lg p-2">
                    <div>
                        {i+1}.
                    </div>
                    <div>
                        {post.title}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default App;
