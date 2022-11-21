const { Student,Course, Grade } = require('../models')


const GetGrade = async (req, res) => {

    try {

      const grade=await Student.findByPk(req.params.student_id, {

        include:[
          {
            model:Grade,
            as:'grades',
            through:{attributes:[]}
          }
        ]
      })
    res.send(grade)
    } catch (error) {
      throw error
      
  }
}

  

const GetGradeDetails=async(req,res)=>{
  try{
    const grade=await Grade.findByPk(req.params.grade_id) 
    res.send(grade)
  } catch (error){
    throw error
  }
}

const GetAllGrades = async (req, res) => {
  try {
      const grades = await Grade.findAll()
      res.send(grades)
  } catch (error) {
      throw error
  }
}



module.exports={
  GetGrade,
  GetAllGrades,
  GetGradeDetails,
}