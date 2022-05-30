export const validateCreateSub=(formData) =>{

    const messages ={
       SUBMISSION_TYPE :"Invalid Submission Type. Try Again...",
       SUBMISSION_DEADLINE : "Deadline is invalid. Please try again..."
    };

    const output ={
            status : false,
            message : null
    };

    if(formData.subType.length <= 2 )
    {
        output.message = messages.SUBMISSION_TYPE;
        output.status = false;
        return output;
    
    }
    if(formData.deadline.length <= 2)
    {
        output.message = messages.SUBMISSION_DEADLINE;
        output.status = false;
        return output;
    }
    else
    {
        output.status = true;
        return output;
    }
 
};

export const validateMarkingUp=(formData) =>{

    const messages ={
       MARKING_TOPIC :"Topic is not acceptable.Try again...",
       MARKIGN_FILE: "At least one file should be insrted..."
    };

    const output ={
            status : false,
            message : null
    };

    if(formData.topic.length <= 2 )
    {
        output.message = messages.MARKING_TOPIC;
        output.status = false;
        return output;
    
    }
    else
    {
        output.status = true;
        return output;
    }
 
};