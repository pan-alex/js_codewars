// The 2020 International Society of Hypertension Practice Guidelines describe raised blood pressure (hypertension) and its complications as the leading cause of death in the world at the time of publication. Blood pressure is the measure of the heart's pumping pressure against the blood vessel walls. It is recorded as a systolic pressure over a diastolic pressure (for example '120/80 mmHg') which represent the maximum and minimum pressure in the vessels between heartbeats.

// For the purpose of this kata, hypertension can be diagnosed when a patient's blood pressure meets any of the three criteria below:

//     Average of all measured systolic pressures >= 140 mmHg. Must have minumum of 2 measurements.
//     Average of all measured diastolic presures >= 90 mmHg. Must have minimum of 2 measurements.
//     Any one measurement with systolic pressure >= 180 mmHg AND diastolic pressure >= 110 mmHg

// You are given a list, patients, in which each element represents a patient. Each patient/element consists of a list of strings (representing all measurements of a patient's blood pressure) in the format "s/d", where s is the systolic pressure and d the diastolic, both in mmHg. Systolic and diastolic numbers will always be whole numbers.

// Return the number of patents that meet any of the above hypertension definitions.

// Example:

// Input:
hypertensive([
    ["130/90","140/94"], // High average diastolic
    ["160/110"],    // Only 1 measure.
    ["200/120"],    // Extreme reading
    ["150/94","140/90","120/90"],   // High average diastolic
    ["140/94","140/90","120/80","130/84"] // Normal
    ])

// Output:
// 3

// # patients at index 0, 2, and 3 are hypertensive

// Constraints: 0 < length of patients list <= 10000

// 0 < length of element within patients <= 30

// Loop over patients
    // For each patient:
        // Check if any measure is >=180 systolic and >=110 diastolic   
        // extract the average. Check if average is >= 140 systolic or >= 90 diastolic
        // If any of these conditions are true, increase counter.


// Original solution
function hypertensive(patients) {
    let nHypertensive = 0;
    for (i in patients) {
        extremeReading = false
        avgSys = 0
        avgDia = 0

        for (j in patients[i]) {
            [sys, dia] = patients[i][j].split('/')
            if (sys >= 180 && dia >= 110) {
                extremeReading = true;
                break;
            }
            avgSys += +sys
            avgDia += +dia
        }

        nMeasurements = patients[i].length
        avgSys /= nMeasurements
        avgDia /= nMeasurements
        highAverage = (avgSys >= 140 || avgDia >= 90) && nMeasurements >= 2
        if (highAverage || extremeReading) nHypertensive += 1
    }
    return nHypertensive;
}
