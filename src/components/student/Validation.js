
export const ValidateCreateGrp=(formData) =>{

    const messages ={
       GROUP_NO_EMPTY :"Enter a valid group number...",
       LEADER_EMPTY : "Enter a valid Registration number for Leader...",
       MEM1_EMPTY : "Enter a valid Registration number for member 2...",
       MEM2_EMPTY : "Enter a valid Registration number for member 3...",
       MEM3_EMPTY : "Enter a valid Registration number for member 4..."

    };

    const output ={
            status : false,
            message : null
    };

    if(formData.GroupNo.length <= 2 )
    {
        output.message = messages.GROUP_NO_EMPTY;
        output.status = false;
        return output;
    
    }
    if((formData.Group_Leader_ITNUM.length < 10) || (formData.Group_Leader_ITNUM.length > 10))
    {
        output.message = messages.LEADER_EMPTY;
        output.status = false;
        return output;
    } 
    if((formData.Group_Member1_ITNUM.length < 10) || (formData.ITnumber.length > 10))
    {
        output.message = messages.MEM1_EMPTY;
        output.status = false;
        return output;
    }
    if((formData.Group_Member2_ITNUM.length < 10) || (formData.Group_Member2_ITNUM.length > 10))
    {
        output.message = messages.MEM2_EMPTY;
        output.status = false;
        return output;
    }
    if((formData.Group_Member3_ITNUM.length < 10) || (formData.Group_Member3_ITNUM.length > 10))
    {
        output.message = messages.MEM3_EMPTY;
        output.status = false;
        return output;
    }
    else
    {
        output.status = true;
        return output;
    }
 
};