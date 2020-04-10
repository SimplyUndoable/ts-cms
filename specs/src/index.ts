import * as fs from 'fs'
import * as dotenv from 'dotenv'
import * as OpenApi from 'openapi-types'
import userSpecs from './user'

dotenv.config({ path: '../.env' })

const specArray = [userSpecs]

const paths: OpenApi.OpenAPIV3.PathsObject = {}
const tags: OpenApi.OpenAPIV3.TagObject[] = []

interface ISpec {
    paths: OpenApi.OpenAPIV3.PathsObject;
    tags: OpenApi.OpenAPIV3.TagObject[];
}

specArray.forEach((el: ISpec) => {
	Object.assign(paths, el.paths)
	tags.push(...el.tags)
})

const specs: OpenApi.OpenAPIV3.Document = {
	openapi: '3.0.1',
	info: {
		title: `${process.env.NAME} API`,
		description: `${process.env.NAME} API`,
		version: '1.0.0'
	},
	security: [
		{
			bearer: []
		}
	],
	components: {
		securitySchemes: {
			bearer: {
				type: 'http',
				scheme: 'bearer',
				bearerFormat: 'JWT',
			}
		}
	},
	servers: [
		{
			url: `http://localhost:${process.env.API_PORT}`,
			description: 'Development environment'
		}
	],
	tags: tags,
	paths: paths
}

fs.writeFile('index.json', JSON.stringify(specs), 'utf8', (e) => {
	if (e) {
		console.log('An error occurred while writing the specs.')
		return console.log(e)
	}

	console.log('Specs has been saved.')
})
