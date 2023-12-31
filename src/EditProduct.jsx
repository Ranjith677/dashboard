import axios from 'axios';
import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'

function EditProduct() {
   const param = useParams();
   let navigate = useNavigate();
   const formik = useFormik({
    initialValues:{
        name:'',
        category:'',
        unitsold:'',
        price:'',
        expdate:'',

    },
    validate:()=>{
return {}
    },
    onSubmit: async (values)=>{
        try {
            await axios.put(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/products/${param.id}`,values);
            navigate('/Portal/Products')
            
        } catch (error) {
            console.log(error)
        }
    }

})

useEffect(()=>{
    editCode()
})

let editCode = async (values) =>{
    try {
        let user = await axios.get(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/products/${param.id}`,values)
        formik.setValues({
          name: user.data.name,
          category:user.data.category,
          unitsold:user.data.unitsold,
          price:user.data.price,
          expdate:user.data.expdate,
          
        })
    } catch (error) {
        
    }
}


  return (
  <>
    <h1 className="h3 mb-0 text-gray-800">Edit products</h1>
    <div className='container mt-5'>

        <form onSubmit={formik.handleSubmit}>
        <div className='row'>

<div className='col-lg-6 mt-2'>

    <label for={"name"}>Name</label>
    <input className={'form-control'} onChange={formik.handleChange} name={"name"} value={formik.values.name} id={"name"} required type={"text"}></input>

</div>
<div className='col-lg-6 mt-2'>

    <label for={"cate"}>Category</label>
    <input className={'form-control'} onChange={formik.handleChange} name={"category"} value={formik.values.category} id={"cate"} required type={"text"}></input>

</div>
<div className='col-lg-6 mt-2'>

    <label for={"uni"}>Units sold</label>
    <input className={'form-control'} onChange={formik.handleChange} name={"unitsold"} value={formik.values.unitsold} id={"uni"} required type={"number"}></input>

</div>
<div className='col-lg-6 mt-2'>

    <label for={"name"}>Price</label>
    <input className={'form-control'} onChange={formik.handleChange} name={"price"} value={formik.values.price} id={"name"} required type={"number"}></input>

</div>
<div className='col-lg-6 mt-2'>

    <label for={"name"}>Exp. date</label>
    <input className={'form-control'} onChange={formik.handleChange} name={"expdate"} value={formik.values.expdate} id={"name"} required  type={"text"}></input>

</div>

</div>

<input type={"submit"} className={"btn btn-primary mt-3"} value={"submit"}/>
        </form>
        
    </div>
  </>
  )
}

export default EditProduct