import React from 'react';
// import { useForm } from "react-hook-form";


const ReviewInputForm = () => {

    const handleSubmit = () => {
        console.log();
    }
    // const onSubmit = (data, e) => {
    //     console.log(data, e);
    //     // pass values to backend
    // }
    // const onError = (errors, e) => console.log(errors, e);

    return(
        <form onSubmit={handleSubmit()}>
            <label>
                Restaurant Name
                <input type="text" name="restoName" />
            </label>
            <br></br>
            <label>
                Name
                <input type="text" name="reviewerName" />
            </label>
            <br></br>
            <label>
                E-mail
                <input type="text" name="email" />
            </label>
            <br></br>
            <label>
                Rating
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <br></br>
            <input type="submit" value="Save review" />

        </form>
    );
}

export default ReviewInputForm;