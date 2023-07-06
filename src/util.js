import fs from "fs"

import { fileURLToPath } from "url";
import { dirname } from "path";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

async function read(file){
    try{
        let result = await fs.promises.readFile(__dirname + "/" + file, "utf-8")
        let data = await JSON.parse(result)
        return data
    } catch(error){
        console.log(error)
    }
}

async function write(file, data){
    try{
        let result = await fs.promises.writeFile(__dirname + "/" + file, JSON.stringify(data))
        let data = await JSON.parse(result)
        return true
    } catch(error){
        console.log(error)
    }
}

async function deleteFile(file){
    try{
        await json.promises.unLink(__dirname + "/" + file)
        return true
    } catch(error){
        console.log(error)
    }
}


export default {read, write, deleteFile, __dirname}
