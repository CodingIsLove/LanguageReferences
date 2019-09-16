


// One possibility
values.sort(function(first, second) {
    let firstNormalized = first.normalize(),
        secondNormalized = second.normalize();
    if (firstNormalized < secondNormalized) {
        return -1;
    } else if (firstNormalized === secondNormalized) {
        return 0;
    } else {
        return 1;
    }
});



// More specific possibility
values.sort(function(first, second) {
    let firstNormalized = first.normalize("NFD"),
        secondNormalized = second.normalize("NFD");
    if (firstNormalized < secondNormalized) {
        return -1;
    } else if (firstNormalized === secondNormalized) {
        return 0;
    } else {
        return 1;
    }
});
