import * as OpenApi from "openapi-types"

const userTag: OpenApi.OpenAPIV3.TagObject = {
    name: "user",
    description: 'The user endpoints'
}

const userTags: OpenApi.OpenAPIV3.TagObject[] = [userTag]

const userPaths: OpenApi.OpenAPIV3.PathsObject = {
    '/user': {
        get: {
            tags: [userTag.name],
            operationId: 'listUsers'
        }
    }
}

const userSpecs = {
    paths: userPaths,
    tags: userTags
}

export default userSpecs
