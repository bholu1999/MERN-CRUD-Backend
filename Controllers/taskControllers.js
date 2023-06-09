const TaskModel = require('../models/taskModel')

module.exports.getTasks = async(req, res) => {
    const task = await TaskModel.find()
    res.send(task);
}

module.exports.saveTask= (req, res) =>{
    const {task} = req.body;

    TaskModel.create({task})
        .then((data)=>{
            console.log("data save");
            res.status(201).send(data);
        })
        .catch((err)=>{
            console.log(err);
            res.send({error : err, msg :"somthong went wrong"});
        });
};

module.exports.updateTask= (req, res) =>{
    const {id} = req.params;
    const {task} = req.body;

    TaskModel.findByIdAndUpdate(id,{task})
        .then((data) => res.send("update successfully"))
        .catch((err)=>{
            console.log(err);
            res.send({error : err, msg :"somthong went wrong"});
        });
};

module.exports.deleteTask= (req, res) =>{
    const {id} = req.params;

    TaskModel.findByIdAndDelete(id)
        .then((data) =>{
            console.log(data);
            res.send("Delete successfully");
        })
        .catch((err)=>{
            console.log(err);
            res.send({error : err, msg :"somthong went wrong"});
        });
};