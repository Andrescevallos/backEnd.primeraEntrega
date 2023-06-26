import fs from "fs"

async function read(file){
    try{
        let result = await fs.promises.readFile(file, "utf-8")
        let data = await JSON.parse(result)
        return data
    } catch(error){
        console.log(error)
    }
}

async function write(file, data){
    try{
        let result = await fs.promises.writeFile(file, JSON.stringify(data))
        let data = await JSON.parse(result)
        return true
    } catch(error){
        console.log(error)
    }
}

async function deleteFile(file){
    try{
        await json.promises.unLink(file)
        return true
    } catch(error){
        console.log(error)
    }
}


export default{read, write, deleteFile}
