import React from 'react'
import "../css/AddForm.css"

function AddForm(props) {
    const { title, setTitle, savetask } = props;
    return (
        <>
            <h2>แอปจัดการงาน</h2>
            <form onSubmit={savetask}>
                <div className="form-control">
                    <input type="text" className='textinput' onChange={(e) => setTitle(e.target.value)} value={title} />
                    <button type="submit" className='btn-submit'>เพิ่มข้อมูล</button>
                </div>
            </form>
        </>
    )
}

export default AddForm