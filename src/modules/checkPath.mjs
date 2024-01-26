import { access } from 'node:fs/promises';

export default async function isCorrectPath(path){
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
}