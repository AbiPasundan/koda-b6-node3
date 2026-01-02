export default function calc(params) {


    // .getFullYear().getMonth().getDate()

    // newDate.getDate()
    // newDate.getMonth()
    // newDate.getFullYear()

    // console.log(newDate)

    // const parts = params.split('');

    // const regex = /^\d{2}\/\m{2}\/\y{4}$/;

    if (typeof params !== 'string') {
        return 'Format Tidak Valid';
    }

    

    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(params)) {
        return 'Format Tidak Valid';
    }
    const parts = params.split('/');
    const month = parseInt(parts[0], 10)
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    // console.log(month -1);
    // console.log(new Date(parts[0]))
    
    // let dateNumb = []
    // for (let j = 0; j < params.length; j++) {
    //     const element = params[j];
    //     console.log(element);
    //     dateNumb += element
    // }

    const newDate = new Date(year, month - 1, day);

    // if ( newDate === day && newDate === month && newDate === year ) {
    //     if (isNaN(newDate.getTime())) {
    //         return 'Format Tidak Valid';
    //     }
    //     return params;
    // } else {
    //     return 'Format Tidak Valid';
    // }


    if ( newDate.getFullYear() === year && newDate.getMonth() === month - 1 && newDate.getDate() === day ) {
        if (isNaN(newDate.getTime())) {
            return 'Format Tidak Valid';
        }
        return params;
    } else {
        return 'Format Tidak Valid';
    }
}




// function dateCheck(params) {
//     if (typeof params === 'number' || typeof params === 'boolean') {
//         return 'Format Tanggal tidak valid';
//     }

//     const dateFormatRegex = /^\d{2}\/\d{2}\/\d{4}$/;
//     if (!dateFormatRegex.test(params)) {
//         return 'Format Tanggal tidak valid';
//     }

// }