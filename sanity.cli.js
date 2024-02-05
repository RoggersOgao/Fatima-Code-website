/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import * as dotenv from 'dotenv'

dotenv.config()

import { defineCliConfig } from 'sanity/cli'

const projectId = "86tqg9pt"
const dataset = "development"

export default defineCliConfig({ api: { projectId, dataset } })
