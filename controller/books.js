import bookHandle from "../model/books.js";

export const AddBook=async(req,res)=>{
    const {title,description,price} = req.body;
    const photo = req.file.filename;
    await bookHandle({title,description,price,photo}).save()
    .then((data)=>{res.json(data)})
    .catch((err)=>{console.log(err)});    
}

export const ReadBook = async (req,res)=>{    
    await bookHandle.find({})
    .then((data)=>{res.json(data)})
    .catch((err)=>{console.log(err)});
}

export const DeleteBook = async (req,res)=>{
    const id = req.params.id;
    await bookHandle.findByIdAndDelete({_id:id})
    .then((data)=>{res.json(data)})
    .catch((err)=>{console.log(err)});
}

export const ReadSingleBook = async (req,res)=>{
    const id = req.params.id;
    await bookHandle.findById({_id:id})
    .then((data)=>{res.json(data)})
    .catch((err)=>{console.log(err)});
}

export const UpdateBook = async (req,res)=>{
    const id = req.params.id;
    const {title,description,price} = req.body;
    const photo = req.file.filename;
    await bookHandle.findByIdAndUpdate({_id:id},{title,description,price,photo})
    .then((data)=>{res.json(data)})
    .catch((err)=>{console.log(err)});
}