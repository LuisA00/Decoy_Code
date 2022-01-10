function Decoy(timeline) {

    // Get counpling and phantom condition. 
    var c_condition = "";
    var instructions = "";        
	if(coupling_condition > 0) {
        c_condition = "Low coupling";
        instructions = "Instructions: Low coupling";
	} else {
        c_condition = "High coupling";
        instructions = "Instructions: High coupling";
    }

    var phantom_ints = "";
    if(phantom_condition == "Highly_desirable"){

        phantom_ints = "Discontinued";
        //"Out of stock";

    } else if (phantom_condition == "Weakly_desirable") {
        //phantom_ints = "Delayed shipping";
        phantom_ints = "Discontinued";
    } else {
        //phantom_ints = "Discontinued";
        phantom_ints = "Discontinued";
    }

    /**
     * P -> Phantom 
     * A -> Attraction 
     * S -> Similarity
     * C -> Compromise
     */
    var decoy_types = ["P", "A", "S", "C"]


    /*
    //First dimension & Second dimension
    var demo_cs_names = [["Computers", "Size of hard drive (Gb)", "Speed (gHz)"],
    ["Laptops", "Speed (gHz)", "Battery life (hrs)"], 
    ["Plane tickets", "Length of layover (min)", "Price ($)"], 
    ["Riding Lawnmowers", "Horsepower (HP)", "Cut width (in)"], 
    ["Private Elementary schools", "Travel time (min)", "School rating (0-100)"],
    ["Electric keyboards", "Tone quality rating", "Number of features"], 
    ["Microwaves", "Length of warranty (mo)", "Cooking power (watts)"],
    ["Cars", "Ride quality", "Miles per gallon (MPG)"]
    ["TVs", "Screen size (in)", "Contrast ratio"],
    ["Cordless powerdrills", "Power (volts)", "Battery life (min)"]]
    
    // A, B, AD_A, AD_B, C_A, C_B
    var demo_choice_set = [[["800", "600", "800", "500", "900", "500"], ["2.1", "2.3", "2", "2.3", "2", "2.4"]],
    [["2", "1.66", "1", "1.49", "2.17", "1.49"], ["3", "4", "2.5", "4", "2.5", "4.5"]],
    [["80", "130", "80", "155", "55", "155"], ["250", "220", "265", "220", "265", "205"]], 
    [["23", "15", "23", "11", "27", "11"], ["38", "46", "34", "46", "34", "50"]], 
    [["30", "45", "30", "52.5", "22.5", "52.5"], ["60", "80", "50", "80", "50", "90"]], 
    [["85", "75", "85", "70", "90", "70"], ["9", "17", "5", "17", "5", "21"]], 
    [["14", "8", "14", "5", "17", "5"], ["1000", "1600", "700", "1600", "700", "1900"]], 
    [["80", "60", "80", "50", "90", "50"], ["26", "30", "24", "30", "24", "32"]], 
    [["46", "37", "46", "32.5", "50.5", "32.5"], ["2400/1", "3000/1", "2100/1", "3000/1", "2100/1", "3300/1"]],
    [["20", "14", "20", "11", "23", "11"], ["30", "40", "25", "40", "25", "45"]]];
   */

    //First dimension & Second dimension
   var demo_cs_names1 = [["Computers1", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers2", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers3", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers4", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers5", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers6", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers7", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers8", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers9", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers10", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers11", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers12", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers13", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers14", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers15", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers16", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers17", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers18", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers19", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers20", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers21", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers22", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers23", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers24", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers25", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers26", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers27", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers28", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers29", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers30", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers31", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers32", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers33", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers34", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers35", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers36", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers37", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers38", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers39", "Size of hard drive (Gb)", "Speed (gHz)"],
   ["Computers40", "Size of hard drive (Gb)", "Speed (gHz)"]
    ];

    // A, B, P_A, P_B, A_A, A_B, S_A, S_B, C_A, C_B
   var demo_cs_ds = [[["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],

   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],

   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],

   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   [["830", "1150", "830", "1300", "650", "1150", "900", "1100", "500", "1500" ], ["3.0", "2.5", "3.2", "2.5", "3.0", "2.2", "2.9", "2.6", "3.5", "2"]],
   ];

   var demo_fillers_names = [ ["Filler1", "D1", "D2"],
   ["Filler2", "D1", "D2"],
   ["Filler3", "D1", "D2"],
   ["Filler4", "D1", "D2"],
   ["Filler5", "D1", "D2"],
   ["Filler6", "D1", "D2"],
   ["Filler7", "D1", "D2"],
   ["Filler8", "D1", "D2"],
   ["Filler9", "D1", "D2"],
   ["Filler10", "D1", "D2"],
   ["Filler11", "D1", "D2"],
   ["Filler12", "D1", "D2"],
   ["Filler13", "D1", "D2"],
   ["Filler14", "D1", "D2"],
   ["Filler15", "D1", "D2"],
   ["Filler16", "D1", "D2"],
   ["Filler17", "D1", "D2"],
   ["Filler18", "D1", "D2"],
   ["Filler19", "D1", "D2"],
   ["Filler20", "D1", "D2"],
   ];

   // First dimension (A1, B1, C1) and second dimension (A2, B2, C2)
   var demo_fillers_cs = [[[0, 0, 0], [0, 0, 0]],
   [[1, 1, 1], [1, 1, 1]],
   [[2, 2, 2], [2, 2, 2]],
   [[3, 3, 3], [3, 3, 3]],
   [[4, 4, 4], [4, 4, 4]],
   [[5, 5, 5], [5, 5, 5]],
   [[6, 6, 6], [6, 6, 6]],
   [[7, 7, 7], [7, 7, 7]],
   [[8, 8, 8], [8, 8, 8]],
   [[9, 9, 9], [9, 9, 9]],
   [[10, 10, 10], [10, 10, 10]],
   [[11, 11, 11], [11, 11, 11]],
   [[12, 12, 12], [12, 12, 12]],
   [[13, 13, 13], [13, 13, 13]],
   [[14, 14, 14], [14, 14, 14]],
   [[15, 15, 15], [15, 15, 15]],
   [[16, 16, 16], [16, 16, 16]],
   [[17, 17, 17], [17, 17, 17]],
   [[18, 18, 18], [18, 18, 18]],
   [[19, 19, 19], [19, 19, 19]]
   ];
   
   
   
   // Might be useful later.
   //var sequence = jsPsych.randomization.shuffle(Array.from(Array(10).keys()));

   var mainIt = 0; // Goes from 0-99; +1 each trial, no matter if decoy or filler. 
   var decoyIt = 0; // Goes from 0-79; +1 each decoy trial 
   var stimuliIt = 0; // Goes from 0-99; +1 each trial, no matter if decoy or filler. => Delete latter, redundant variable.
   var fillerIt = 0; // Goes from 0-19; +1 each time there is a filler trial. 
   
   var countdown_A = 0;
   var counter1 = 0;  
    

   var counter_break_1 = 120;
   var counter_break_2 = 120;
   var counter_break_3 = 120;
   var counter2 = 0;

   /**
    * Choice-set holders.
    */

   var current_good = {}
   var option_A = {}
   var option_B = {}
   var option_C = {}   

    /**
     * Catch system Nums
     * 1) Generate array with random sequence of numbers (0,1) 'catchIndicesNums'
     * On average 0.05% of numbers equal 1 (I think).
     * 2) If x=1, then, participant encounters a catch trial nums, else, exp. continues as normal 
     * (e.g., 3 + 4 = ?).
     */
    
    function getCatchIndices() {
        for (var catchIndices = [], i = 0 ; i<120; i++) {
            Math.random() < .05 ? catchIndices[i] = 1 : catchIndices[i]=0;
       }
       return catchIndices
    }
    
    var catchCounterNums = 0;
    var catchNum1 = 0;
    var catchNum2 = 0;
    var catchIndicesNums = getCatchIndices();
    console.log("catcher nums: " + String(catchIndicesNums));
         
    function getCatchNums() {
           catchNum1 = Math.floor(Math.random() * 9); // 0 to 8
           catchNum2 = Math.floor(Math.random() * (9 - catchNum1)) + 1; // complement of catchNum1
    }

    /**
     * Catch system Decoys
     * 1) Generate array with random sequence of numbers (0,1) 'catchIndices'
     * On average 0.05% of numbers equal 1 (I think).
     * 2) If x=1, then, participant encounters a catch trial, else, exp. continues as normal
     * (e.g., last trial the maximum value on D1 was ?).
     */
    var catchCounterDecoys = 0;
    var catchIndicesDecoys = getCatchIndices();
    console.log("catcher decoys: " + String(catchIndicesDecoys));

    var m_value = "";
    var d_value = "";
    var low = 0;
    var med = 0; 
    var high = 0;
    var sum_subs = 0;
    var low_med_high = 0;

    function decimalCheck(n) {
        var result = (n - Math.floor(n)) !== 0; 
   
        if (result)
            return true;
         else
            return false;
        };


    function getCatchDecoys() {

        var d1_or_d2 = Math.floor(Math.random() * 2); // generate random num (0, 1)
        var min_or_max = Math.floor(Math.random() * 2);
        var reference_value = 0;

        // If 0, ask participants about value of D1, else ask about vlue of D2.
        if(d1_or_d2 == 0) {
            
            d_value = current_good.dimension_1;
            var max_val = Math.max(option_A.dimension_1, option_B.dimension_1, option_C.dimension_1);
            var min_val = Math.min(option_A.dimension_1, option_B.dimension_1, option_C.dimension_1);
            // Short if-statement, if 1 use max_val, else use min_val.
            (min_or_max > 0) ? reference_value = max_val : reference_value = min_val;
            (min_or_max > 0) ? m_value = "maximum value" : m_value = "minimum value";

        } else {

            d_value = current_good.dimension_2
            var max_val = Math.max(option_A.dimension_2, option_B.dimension_2, option_C.dimension_2);
            var min_val = Math.min(option_A.dimension_2, option_B.dimension_2, option_C.dimension_2);
            // Short if-statement, if 1 use max_val, else use min_val.
            (min_or_max > 0) ? reference_value = max_val : reference_value = min_val;
            (min_or_max > 0) ? m_value = "maximum value" : m_value = "minimum value";

        }
            
        // Random number to make complementary options. 
        sum_subs = ((Math.floor(Math.random() * 5) + 1) * (reference_value/15)); // generate random num (1, 5) and multiply the product of 0.10*reference_value. //(reference_value/10)

        // Randomize whether the correct answer is the low, medium, or high option.
        low_med_high = Math.floor(Math.random() * 3); // generate random num (0, 1, 2)

        if(low_med_high == 0) {
                
            // Correct option low.
            low = reference_value; 
            med = reference_value + sum_subs;
            (decimalCheck(min_val)) ? med = med.toFixed(1) : med = Math.round(reference_value + sum_subs);
            high = reference_value + (sum_subs*2);
            (decimalCheck(min_val)) ? high = high.toFixed(1) : high = Math.round(reference_value + (sum_subs*2));

        } else if (low_med_high == 1) {

            // Correct option med. 
            low = reference_value - sum_subs;
            (decimalCheck(min_val)) ? low = low.toFixed(1) : low = Math.round(reference_value - sum_subs); 
            med = reference_value; 
            high = reference_value + sum_subs;
            (decimalCheck(min_val)) ? high = high.toFixed(1) : high = Math.round(reference_value + sum_subs);

        } else {

            // Correct option high. 
            low = reference_value - sum_subs - sum_subs;
            (decimalCheck(min_val)) ? low = low.toFixed(1) : low = Math.round(reference_value - sum_subs - sum_subs); 
            med = reference_value - sum_subs;
            (decimalCheck(min_val)) ? med = med.toFixed(1) : med = Math.round(reference_value - sum_subs); 
            high = reference_value; 

        }

        if( ((med - low) != sum_subs) && ((high - med) != sum_subs)) {

            sum_subs = ((med - low) + (high - med))/2

        }
    

    };

    /**
     *  We do not want to have two consecutive catch trials. This for loop will 
     *  go through each value in both sequences and if it encounters (1 && 1), will
     *  remake the sequences until there is no consecutive trials. 
     */ 
    for(let x =0; x < 120; x++) {

        if((catchIndicesNums[x] == 1) && ((catchIndicesDecoys[x] == 1))) {
            catchIndicesNums = getCatchIndices();
            catchIndicesDecoys = getCatchIndices();
            x = 0
            console.log("re-making catch system.")
        }

    }


    // Generate Choice-set// 

    /**
     * 100 total trials & 4 blocks
     * 25 trials per block (20 product, 5 filler)
     * 
     */

    var target_monitoring = {}

    var fixationMean = 200;
	var fixationSTDev = 50;

    // Description
    function getStimuliSequence() {
        
        var s_range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39]

        // Randomize 1-40
        var sequence_1 = jsPsych.randomization.shuffle(s_range);
        var sequence_2 = jsPsych.randomization.shuffle(s_range);
        
        // Generate two arrays containing 0-39 in randomized order
        // Add each array to s_array (description).
        var s_sequence = [];
        for (let i=0; i < 40; i++) {s_sequence.push(sequence_1[i])}
        for (let i=0; i < 40; i++) {s_sequence.push(sequence_2[i])}

        return s_sequence

    }

    /**
     * Description
     * 
     */
    function getFillersSequence() {

        var f_range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
            10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

        var rand_f_range = jsPsych.randomization.shuffle(f_range);
        //console.log("rand_f_range: " + String(typeof(rand_f_range)));

        var fillers_b1 = [];
        var fillers_b2 = [];
        var fillers_b3 = [];
        var fillers_b4 = [];
        
        //
        fillers_b1.push(rand_f_range[0]);
        fillers_b1.push(rand_f_range[2]);
        fillers_b1.push(rand_f_range[4]);
        fillers_b1.push(rand_f_range[6]);
        fillers_b1.push(rand_f_range[8]);
        //console.log("fillers_b1: " + String(fillers_b1))
        
        fillers_b2.push(rand_f_range[1]);
        fillers_b2.push(rand_f_range[3]);
        fillers_b2.push(rand_f_range[5]);
        fillers_b2.push(rand_f_range[7]);
        fillers_b2.push(rand_f_range[9]);
        //console.log("fillers_b2: " + String(fillers_b2))
        
        var fillers_twice = []; 
        for (let i=0; i < 5; i++) {fillers_twice.push(fillers_b1[i])}
        for (let i=0; i < 5; i++) {fillers_twice.push(fillers_b2[i])}
        fillers_twice = jsPsych.randomization.shuffle(fillers_twice);
        
        //
        fillers_b3.push(rand_f_range[10])
        fillers_b4.push(rand_f_range[11])
        fillers_b3.push(fillers_twice[0])
        fillers_b3.push(fillers_twice[2])
        fillers_b3.push(fillers_twice[4])
        fillers_b3.push(fillers_twice[6])
        
        fillers_b4.push(fillers_twice[1])
        fillers_b4.push(fillers_twice[3])
        fillers_b4.push(fillers_twice[5])
        fillers_b4.push(fillers_twice[8])
        
        fillers_b3 = jsPsych.randomization.shuffle(fillers_b3);
        fillers_b4 = jsPsych.randomization.shuffle(fillers_b4);
        //console.log("fillers_b3: " + String(fillers_b3))
        //console.log("fillers_b4: " + String(fillers_b4))
  
        var f_sequence = [];
        for (let i=0; i < 5; i++) {f_sequence.push(fillers_b1[i])}
        for (let i=0; i < 5; i++) {f_sequence.push(fillers_b2[i])}
        for (let i=0; i < 5; i++) {f_sequence.push(fillers_b3[i])}
        for (let i=0; i < 5; i++) {f_sequence.push(fillers_b4[i])}
        
        return f_sequence

    }

    // Description
    function getDecoySequence() {

        var d_sequence = [];
        d_range = ["P", "A", "S", "C", "F"]
        for (let i=0; i < 20; i++) {
            var d_hold = jsPsych.randomization.shuffle(d_range)

            for (let x=0; x < 5; x++) {d_sequence.push(d_hold[x])}
            
        }

        return d_sequence
    }

    // Description
    function getOptions(stimulus, target, decoy) {

        // This will help randomizing the position of options. 
        var options =  [
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]
        ]; 

        // Set first two options
        options[0][0] = "A"  //position
        options[0][1] =  demo_cs_ds[stimulus][0][0] // dimension1
        options[0][2] =  demo_cs_ds[stimulus][1][0] // dimension2

        options[1][0] = "B"
        options[1][1] = demo_cs_ds[stimulus][0][1]
        options[1][2] = demo_cs_ds[stimulus][1][1]
        
        if((target == "A") && (decoy == "P")){

            //console.log("P_A");
            options[2][0] = "P_A"
            options[2][1] = demo_cs_ds[stimulus][0][2];
            options[2][2] = demo_cs_ds[stimulus][1][2];

        } else if ((target == "B") && (decoy == "P")) {

            //console.log("P_B");
            options[2][0] = "P_B"
            options[2][1] = demo_cs_ds[stimulus][0][3];
            options[2][2] = demo_cs_ds[stimulus][1][3];

        } else if ((target == "A") && (decoy == "A")) {

            //console.log("A_A");
            options[2][0] = "A_A"
            options[2][1] = demo_cs_ds[stimulus][0][4];
            options[2][2] = demo_cs_ds[stimulus][1][4];

        } else if ((target == "B") && (decoy == "A")) {

            //console.log("A_B");
            options[2][0] = "A_B"
            options[2][1] = demo_cs_ds[stimulus][0][5];
            options[2][2] = demo_cs_ds[stimulus][1][5];

        } else if ((target == "A") && (decoy == "S")) {

            //console.log("S_A");
            options[2][0] = "S_A"
            options[2][1] = demo_cs_ds[stimulus][0][6];
            options[2][2] = demo_cs_ds[stimulus][1][6];

        } else if ((target == "B") && (decoy == "S")) {

            //console.log("S_B");
            options[2][0] = "S_B"
            options[2][1] = demo_cs_ds[stimulus][0][7];
            options[2][2] = demo_cs_ds[stimulus][1][7];

        } else if ((target == "A") && (decoy == "C")) {

            //console.log("C_A");
            options[2][0] = "C_A"
            options[2][1] = demo_cs_ds[stimulus][0][8];
            options[2][2] = demo_cs_ds[stimulus][1][8];

        } else if ((target == "B") && (decoy == "C")) {

            //console.log("C_B");
            options[2][0] = "C_B"
            options[2][1] = demo_cs_ds[stimulus][0][9];
            options[2][2] = demo_cs_ds[stimulus][1][9];

        } else {
            //console.log("ERROR!");
        }

        var option_1 = [];
        var option_2 = [];
        var option_3 = [];

        //Randomizing options order
        var sort = jsPsych.randomization.shuffle([0, 1, 2 ]);
        //console.log("sort: " + String(sort));

        option_1 = options[sort[0]];
        option_2 = options[sort[1]];
        option_3 = options[sort[2]];

        return [option_1, option_2, option_3]

    }

    // Description
    function getPhantomBanner(decoy, optionA, optionB, optionC) {

        var banners = ["", "", ""];

        //console.log(decoy); 
        //console.log(typeof(optionA));
        //console.log(optionA);
        //console.log(typeof(optionB));
        //console.log(optionB);
        //console.log(typeof(optionC));
        //console.log(optionC);
        //console.log(phantom_ints);

        if(decoy == "P"){

            if((optionA.position == "P_A" && phantom_ints == "Out of stock") || (optionA.position == "P_B" && phantom_ints == "Out of stock")) {

                banners[0] = "<h2 style='position:absolute;top:10px;left:113px;height:350px;font-size:45px;font-weight:100px;line-height:1.0;letter-spacing:3px;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</h2>" 

            } else if((optionB.position == "P_A" && phantom_ints == "Out of stock") || (optionB.position == "P_B" && phantom_ints == "Out of stock")) {

                banners[1] = "<h2 style='position:absolute;top:10px;left:113px;height:350px;font-size:45px;font-weight:100px;line-height:1.0;letter-spacing:3px;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</h2>" 

            } else if((optionC.position == "P_A" && phantom_ints == "Out of stock") || (optionC.position == "P_B" && phantom_ints == "Out of stock")) {

                banners[2] = "<h2 style='position:absolute;top:10px;left:113px;height:350px;font-size:45px;font-weight:100px;line-height:1.0;letter-spacing:3px;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</h2>" 

            } else if((optionA.position == "P_A" && phantom_ints == "Delayed shipping") || (optionA.position == "P_B" && phantom_ints == "Delayed shipping")) {

                banners[0] = "<h2 style='position:absolute;top:10px;left:66px;height:350px;font-size:54px;font-weight:100px;line-height:1.0;letter-spacing:2px;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</h2>" 

            } else if((optionB.position == "P_A" && phantom_ints == "Delayed shipping") || (optionB.position == "P_B" && phantom_ints == "Delayed shipping")) {

                banners[1] = "<h2 style='position:absolute;top:10px;left:66px;height:350px;font-size:54px;font-weight:100px;line-height:1.0;letter-spacing:2px;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</h2>" 

            } else if((optionC.position == "P_A" && phantom_ints == "Delayed shipping") || (optionC.position == "P_B" && phantom_ints == "Delayed shipping")) {

                banners[2] = "<h2 style='position:absolute;top:10px;left:66px;height:350px;font-size:54px;font-weight:100px;line-height:1.0;letter-spacing:2px;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</h2>" 

            } else if((optionA.position == "P_A" && phantom_ints == "Discontinued") || (optionA.position == "P_B" && phantom_ints == "Discontinued")) {

                banners[0] = "<h2 style='position:absolute;top:20px;left:12px;height:350px;font-size:58px;font-weight:100px;line-height:1.0;letter-spacing:3px;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</h2>" 

            } else if((optionB.position == "P_A" && phantom_ints == "Discontinued") || (optionB.position == "P_B" && phantom_ints == "Discontinued")) {

                banners[1] = "<h2 style='position:absolute;top:20px;left:12px;height:350px;font-size:58px;font-weight:100px;line-height:1.0;letter-spacing:3px;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</h2>" 

            } else if((optionC.position == "P_A" && phantom_ints == "Discontinued") || (optionC.position == "P_B" && phantom_ints == "Discontinued")) {

                banners[2] = "<h2 style='position:absolute;top:20px;left:12px;height:350px;font-size:58px;font-weight:100px;line-height:1.0;letter-spacing:3px;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</h2>" 

            }else {
                console.log("Error in 'getPhantomBanner()")
            }


        }

        return banners

    }

    // Description
    function getPhantomChoiceKeys(decoy, optionA, optionB, optionC) {

        var choices_normal_decoy = ['a', 'b', 'c'] 
        var choices_phantom_a = ['b', 'c'] 
        var choices_phantom_b = ['a', 'c'] 
        var choices_phantom_c = ['a', 'b'] 

        if(decoy == "P"){

            if((optionA.position == "P_A") || (optionA.position == "P_B")) {

                return choices_phantom_a

            } else if((optionB.position == "P_A") || (optionB.position == "P_B")) {

                return choices_phantom_b

            } else if((optionC.position == "P_A") || (optionC.position == "P_B")) {

                return choices_phantom_c

            } else {
                console.log("Error in 'getPhantomChoiceKeys()'")
            }


        } else {

            return choices_normal_decoy

        }

    
    }

    // Description
    function getPhantomChoiceBanner(decoy, optionA, optionB, optionC) {

        var choice_banner_normal_decoy = "<div style='position:absolute;bottom:10%;width:50%;display:table;left:27%;'><h3 style='display:table-cell;'>Press 'A', 'B', or 'C'</h3></div>"; 
        var choice_banner_phantom_a = "<div style='position:absolute;bottom:10%;width:50%;display:table;left:27%;'><h3 style='display:table-cell;'>Press 'B' or 'C'</h3></div>";
        var choice_banner_phantom_b = "<div style='position:absolute;bottom:10%;width:50%;display:table;left:27%;'><h3 style='display:table-cell;'>Press 'A' or 'C'</h3></div>";
        var choice_banner_phantom_c = "<div style='position:absolute;bottom:10%;width:50%;display:table;left:27%;'><h3 style='display:table-cell;'>Press 'A' or 'B'</h3></div>";


        if(decoy == "P"){

            if((optionA.position == "P_A") || (optionA.position == "P_B")) {

                return choice_banner_phantom_a

            } else if((optionB.position == "P_A") || (optionB.position == "P_B")) {

                return choice_banner_phantom_b

            } else if((optionC.position == "P_A") || (optionC.position == "P_B")) {

                return choice_banner_phantom_c

            } else {
                console.log("Error in 'getPhantomChoiceBanner()'")
            }


        } else {

            return choice_banner_normal_decoy
            
        }

    }

    // Description
    function getTime(counter_time) {

        // 
        var time_array = (counter_time).toString(10).split("").map(function(t){return parseInt(t)})

        var min = Math.floor(counter_time / 60);
        var sec = Math.floor(counter_time % 60);
        
        if(sec == 0) {
            sec = String("0" + sec)
        } else if(sec == 1) {
            sec = String("0" + sec)
        } else if(sec == 2) {
            sec = String("0" + sec)
        } else if(sec == 3) {
            sec = String("0" + sec)
        } else if(sec == 4) {
            sec = String("0" + sec)
        } else if(sec == 5) {
            sec = String("0" + sec)
        } else if(sec == 6) {
            sec = String("0" + sec)
        } else if(sec == 7) {
            sec = String("0" + sec)
        } else if(sec == 8) {
            sec = String("0" + sec)
        } else if(sec == 9) {
            sec = String("0" + sec)
        }

        return String(min+":"+sec);

        /*
        var ten_sec = 0;
        var sec = 0;

        if(time_array.length === 3){
            if(time_array[1] > 6) {
              ten_sec = (time_array[1]%6) + 2;
              sec = time_array[2];  
              return String(min+":"+ten_sec+sec)
            } else {
              ten_sec = (time_array[1]%6);
              sec = time_array[2]; 
              return String(min+":"+ten_sec+sec)
            }
          } else if (time_array.length === 2) {
            if(time_array[0] > 6) {
              ten_sec = (time_array[0]%6) + 2;
              sec = time_array[1];  
              return String(0+":"+ten_sec+sec)
            } else {
              ten_sec = (time_array[0]%6);
              sec = time_array[1];  
              return String(0+":"+ten_sec+sec)
            }
          } else if (time_array.length === 1) {
            sec = time_array[0];
            return String(0+":"+0+sec)
          } else { 
            console.log("Error!")
          }
          */

    }

    function normalRand() {
        return (Math.sqrt((-2)*Math.log(Math.random()))*Math.cos(2*Math.PI*Math.random())) * fixationSTDev + fixationMean 
    }

    function formatData(data) {
		var nameregexp = /(?:_)([0-9]+)(?:\.jpg)/;
        console.log("formatData()");
		for(var i = 0; i < data.length; i++)
		{	
			newTrialJson = {
				
                "Decoy": data[i].decoy, 
                "Item": data[i].item,
                "Option_1": data[i].option_1,
                "Option_2": data[i].option_2,
                "Option_3": data[i].option_3,
                "Choice": data[i].choice,

				//"Catch_Trial": data[i].Catch,
				//"Caught": data[i].Caught,
				//"Response_Time": data[i].rt * 0.001,
				//"Stimulus_Onset": (data[i].time_elapsed * 0.001 - data[i].rt * 0.001),
				//"Actual_Response_time": data[i].time_elapsed * 0.001,
				//"Too_Fast": (data[i].rt > 200 || data[i].rt === 0 ? 0 : 1),		
			};
			allTrialsJson['Trials'].push(newTrialJson);
		}
	};

    var stimuli_sequence = getStimuliSequence();
    console.log("stimuli_sequence" + String(stimuli_sequence.length) + ": " + String(stimuli_sequence));


    var decoy_sequence = getDecoySequence();
    // Display decoys sequence
    console.log("Decoy_sequence: " + decoy_sequence);
    //console.log(typeof(decoy_sequence));

    var filler_sequence = getFillersSequence();
    console.log("filler_sequence: " + String(filler_sequence));
    //console.log(typeof(filler_sequence));
    //console.log(filler_sequence[0]);
    //console.log(filler_sequence[1]);
    //console.log(filler_sequence[2]);
    //console.log(filler_sequence[3]);
    //console.log(filler_sequence[4]);

    // Useful to manipulate keys and banners displayed in phantom decoys trials. 
    // If there is a phantom decoy in position A, participants only get choices 'B' and 'C'.
    var choices_keys = "";
    var choices_banner = "";


    // Might not be necessary having this variable as a function.
    var InstructionScreen = function(){ 
		//nprompt = t_prompt;
		nchoices = [39, 37];

		return {
			type: "html-keyboard-response",
			stimulus: "<div style='position:absolute;top:40%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>" +
            instructions + "</h3></div>" +
					"<div style='position:absolute;top:60%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>" +
					"...</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
					"Press any key to continue</h3></div>",
			choices: jsPsych.ALL_KEYS,
			on_finish: function(){
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(practice_trial, jsPsych.resumeExperiment);

                    //jsPsych.addNodeToEndOfTimeline(mainLoop, jsPsych.resumeExperiment);
                    //jsPsych.addNodeToEndOfTimeline(phantom_tester, jsPsych.resumeExperiment);
			}
    }};

    var practice_trial = { 
		
        type: "html-keyboard-response",
		stimulus: "<div style='position:absolute;top:40%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>Practice trial</h3></div>" +
			"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
			"Press any key to continue</h3></div>",
		choices: jsPsych.ALL_KEYS,
		on_finish: function(){
			jsPsych.pauseExperiment();
			jsPsych.addNodeToEndOfTimeline(practice_presentation, jsPsych.resumeExperiment);           
		}
    };

    var countdown_one_start = function(){ 
        
        return {type: "html-keyboard-response",
            stimulus: "<h3><p></p>" +
                    "<p>Are you ready?</p></h3>" +
                    "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
                    "Press any key to continue</h3></div>",
            on_finish: function(){
                    jsPsych.pauseExperiment();
                    jsPsych.addNodeToEndOfTimeline(counter_loop_start, jsPsych.resumeExperiment);		
            }
	    }
    };

    var countdown_one = { 
	    type: "html-keyboard-response",
		stimulus: function(){
            counter1 = 10 - countdown_A;
            return "<h3>" +
            "<p>The experiment will begin in:</p></h3>" +
            "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
            String(counter1) + "</h3></div>"},
		choices: jsPsych.NO_KEYS,
		trial_duration: 1000,
		on_finish: function(){
				//jsPsych.pauseExperiment();
				//jsPsych.addNodeToEndOfTimeline(mainLoop, jsPsych.resumeExperiment);		
		}
	};

    var countdown_break1 = { 
	    type: "html-keyboard-response",
		stimulus: function(){

            counter2 = getTime(counter_break_1);

            return "<h3><p>Break 1</p></h3>" +"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+String(counter2) + "</h3></div>"
        },
		choices: jsPsych.NO_KEYS,
		trial_duration: 100, //1000
		on_finish: function(){
		
		}
	};

    var countdown_break2 = { 
	    type: "html-keyboard-response",
		stimulus: function(){

            counter2 = getTime(counter_break_2);

            return "<h3><p></p>" +
            "<p>Break 2</p></h3>" +
            "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
            String(counter2) + "</h3></div>" 
            },
		choices: jsPsych.NO_KEYS,
		trial_duration: 100, //1000
		on_finish: function(){
		
		}
	};

    var countdown_break3 = { 
	    type: "html-keyboard-response",
		stimulus: function(){

            counter2 = getTime(counter_break_3);

            return "<h3><p></p>" +
            "<p>Break 3</p></h3>" +
            "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
            String(counter2) + "</h3></div>" 
            },
		choices: jsPsych.NO_KEYS,
		trial_duration: 100, //1000
		on_finish: function(){
		
		}
	};

    var end_break = { 
	    type: "html-keyboard-response",
		stimulus:  "<h3><p></p>" +
            "<p>End of break.</p></h3>" +
            "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
            "Press any key to continue the experiment.</h3></div>",
		choices: jsPsych.ALL_KEYS,
		on_finish: function(){

            if(mainIt > 74) {
                jsPsych.pauseExperiment();
                console.log("mainLoop4")
                jsPsych.addNodeToEndOfTimeline(mainLoop4, jsPsych.resumeExperiment);
            } else if (mainIt > 50) {

                jsPsych.pauseExperiment();
                console.log("mainLoop3")
                jsPsych.addNodeToEndOfTimeline(mainLoop3, jsPsych.resumeExperiment);

            } else {

                jsPsych.pauseExperiment();
                console.log("mainLoop2")
                jsPsych.addNodeToEndOfTimeline(mainLoop2, jsPsych.resumeExperiment);

            }
		}
	};

    /* 
    Events within a trial/experiment (presentation, deliberation, choice).
    */

    var presentation = {
		type: "html-keyboard-response",
		stimulus: function(){ 
            
            //console.log("decoyIt: " + String(decoyIt));
            //console.log("fillerIt: " + String(fillerIt));
            //console.log("stimuliIt: " + String(stimuliIt));
            console.log("mainIt: " + String(mainIt));

            if(decoy_sequence[decoyIt] == "F") {

                console.log("fillerIt: " + String(fillerIt));
                // Update item category according to sequence
                current_good.item = demo_fillers_names[filler_sequence[fillerIt]][0];
                current_good.dimension_1 = demo_fillers_names[filler_sequence[fillerIt]][1];
                current_good.dimension_2 = demo_fillers_names[filler_sequence[fillerIt]][2];

                // Update A, B, C
                option_A.dimension_1 = demo_fillers_cs[filler_sequence[fillerIt]][0][0];
                option_A.dimension_2 = demo_fillers_cs[filler_sequence[fillerIt]][1][0];

                option_B.dimension_1 = demo_fillers_cs[filler_sequence[fillerIt]][0][1];
                option_B.dimension_2 = demo_fillers_cs[filler_sequence[fillerIt]][1][1];

                option_C.dimension_1 = demo_fillers_cs[filler_sequence[fillerIt]][0][2];
                option_C.dimension_2 = demo_fillers_cs[filler_sequence[fillerIt]][1][2];

                // Advance through decoy sequence
                decoyIt++;
                fillerIt++;

            } else {

                // Update item category according to sequence
                current_good.item = demo_cs_names1[stimuli_sequence[stimuliIt]][0];
                current_good.dimension_1 = demo_cs_names1[stimuli_sequence[stimuliIt]][1];
                current_good.dimension_2 = demo_cs_names1[stimuli_sequence[stimuliIt]][2];

                var current_decoy = decoy_sequence[decoyIt];
                var current_stimulus = stimuli_sequence[stimuliIt];

                // Advance through stimuli and decoy sequence
                decoyIt++;
                stimuliIt++;

                // Check if this item has already been encountered. 
                if(target_monitoring[current_good.item] !== undefined) {

                    // 'current_target' = 1 -> Target A
                    // 'current_target' = 1 -> Target B
                    var current_target = Math.floor(Math.random() * 2);
                    if(current_target > 0){
                        current_target = "A";
                    } else {
                        current_target = "B";
                    }

                    var current_options = getOptions(current_stimulus, current_target, current_decoy);

                } else {

                    // If 'target_monitoring' == A -> Set target B
                    // If 'target_monitoring' == B -> Set target A
                    if(target_monitoring[current_good.item] == "A") {

                        var current_target = "B"
                        var current_options = getOptions(current_stimulus, current_target, current_decoy);

                    } else {

                        var current_target = "A"
                        var current_options = getOptions(current_stimulus, current_target, current_decoy);

                    }

                }

                // Read type of decoy.
                option_A.position = current_options[0][0]; 
                option_A.dimension_1 = current_options[0][1];
                option_A.dimension_2 = current_options[0][2];

                option_B.position = current_options[1][0];
                option_B.dimension_1 = current_options[1][1];
                option_B.dimension_2 = current_options[1][2];

                option_C.position = current_options[2][0];
                option_C.dimension_1 = current_options[2][1];
                option_C.dimension_2 = current_options[2][2];

            
            }
            

            return "<div style='position:absolute;top:6%;width:100%;display:table;left:0;'>"+
                "<div style='position:absolute;top:6%;width:50%;display:table;left:27%;'><h2 style='display:table-cell;color:#002AA5;'>" +
			    "" + current_good.item + "</h2></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:5%;'>"+
                "<h3 style='position:absolute;top:20px;'><br><br>" + current_good.dimension_1 + ":<br><br><br><br>" +
                current_good.dimension_2 + ":</h3></div>" + 
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:25%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option A" + "</h3></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:50%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option B" + "</h3></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:75%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option C" + "</h3></div>" +
            "</div>" 
		},
		choices: jsPsych.NO_KEYS,
		trial_duration: 100, //3000,
		on_finish: function(data){
		}
    };

    var deliberation = {
		type: "html-keyboard-response",
		stimulus: function(){ 
            var phantom_banner_A = "";
            var phantom_banner_B = "";
            var phantom_banner_C = "";
            //Check if decoy corresponds to phantom. 
            // Usin a (-1) because in 'presentation' added 1 to advance through trials. 

            console.log("decoy: " + String(decoy_sequence[decoyIt-1]));
            //console.log("position A: " + String(option_A.position));
            //console.log("position B: " + String(option_B.position));
            //console.log("position C: " + String(option_C.position));
            
            phantom_banner = getPhantomBanner(decoy_sequence[decoyIt-1], option_A, option_B, option_C)

            phantom_banner_A = phantom_banner[0];
            phantom_banner_B = phantom_banner[1];
            phantom_banner_C = phantom_banner[2];

            

            return "<div style='position:absolute;top:6%;width:100%;display:table;left:0;'>"+
                "<div style='position:absolute;top:6%;width:50%;display:table;left:27%;'><h2 style='display:table-cell;color:#002AA5;'>"+
			    "" + current_good.item + "</h2></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:5%;'>"+
                "<h3 style='position:absolute;top:20px;'><br><br>" + current_good.dimension_1 + ":<br><br><br><br>" +
                current_good.dimension_2 + ":</h3></div>" + 
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:25%;border: 2px solid black;border-radius: 25px;'>"+
                
                phantom_banner_A + 
                
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option A" + 
                "<br><br><br>" + option_A.dimension_1 + 
                "<br><br><br><br><br>" + option_A.dimension_2 + "</h3></div>" +

                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:50%;border: 2px solid black;border-radius: 25px;'>"+

                phantom_banner_B + 

                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option B" + 
                "<br><br><br>" + option_B.dimension_1 + 
                "<br><br><br><br><br>" + option_B.dimension_2 + "</h3></div>" +

                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:75%;border: 2px solid black;border-radius: 25px;'>"+

                phantom_banner_C + 

                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option C" + 
                "<br><br><br>" + option_C.dimension_1 + 
                "<br><br><br><br><br>" + option_C.dimension_2 + "</h3></div>" +
            "</div>" 
		},
		choices: jsPsych.NO_KEYS,
		trial_duration: 100, //8000,
		on_finish: function(data){

            // Get choice banner.
            choices_banner = getPhantomChoiceBanner(decoy_sequence[decoyIt-1], option_A, option_B, option_C);
            
		},
    };

    var choice = {
        type: "html-keyboard-response",
		stimulus: function() {
            return"<div style='position:absolute;top:6%;width:100%;display:table;left:0;'>"+
                "<div style='position:absolute;top:6%;width:50%;display:table;left:27%;'><h2 style='display:table-cell;color:#002AA5;'>"+
                "" + current_good.item + "</h2></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:5%;'>"+
                "<h3 style='position:absolute;top:20px;'><br><br>" + current_good.dimension_1 + ":<br><br><br><br>" +
                current_good.dimension_2 + ":</h3></div>" + 
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:25%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option A" + "</h3></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:50%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option B" + "</h3></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:75%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option C" + "</h3></div>" +
                "</div>" + choices_banner},
		    choices: function () {

                choices_keys = getPhantomChoiceKeys(decoy_sequence[decoyIt-1], option_A, option_B, option_C);
                var choosing = [];
                for (let x=0; x < choices_keys.length; x++) {
                    choosing.push(choices_keys[x]);
                }
                return choosing
            },
            //choices_keys, //jsPsych.ALL_KEYS, //a=65, b=66, c=67,
		    trial_duration: 100, //2000, 
		    on_finish: function(data){

                data.task = 1; 
                data.decoy = decoy_sequence[decoyIt-1];
                data.item = current_good.item;
                data.option_1 =  option_A.position;
                data.option_2 =  option_B.position;
                data.option_3 =  option_C.position;

                var last_choice = jsPsych.data.get().last(1).values()[0].key_press ; 
                if(last_choice == 65) {
                    data.choice = option_A.position;
                } else if (last_choice == 66) { 
                    data.choice = option_B.position;;
                } else if (last_choice == 67) {
                    data.choice = option_C.position;
                } else {
                    data.choice = "Missed!";
                }
                //data.rt = 

            }

    };

    var fixation = {
        type: 'html-keyboard-response',
		stimulus: function(){ 
            
            var last_choice = jsPsych.data.get().last(1).values()[0].key_press ; 
            if(last_choice == 65) {
                last_choice = "A";
            } else if (last_choice == 66) { 
                last_choice = "B";
            } else if (last_choice == 67) {
                last_choice = "C";
            } else {
                last_choice = "Missed!";
            }
            
            return '<h1 style="font-size:2rem;">'+ 
            last_choice +'</h1>' }, 
		choices: jsPsych.NO_KEYS,
		trial_duration: normalRand(),
        on_finish: function(data){


		}	
    };

    var blankPage = {
		type: 'html-keyboard-response',
		stimulus: '',
		choices: jsPsych.NO_KEYS,
		trial_duration: normalRand(), 

        on_finish: function(data){         
            
            jsPsych.pauseExperiment();
            jsPsych.endCurrentTimeline();
            
            //jsPsych.addNodeToEndOfTimeline(counter_loop_break_1, jsPsych.resumeExperiment);
            timeline.push(counter_loop_break_1);
            jsPsych.resumeExperiment(); 
            
         
        }

	}

    /**Description: catchStimuliNums
     * 
     */
    var catchStimuliNums = {
		type: "html-keyboard-response",
		stimulus: function(){return "<h3>Press the answer to " + catchNum1 + " + " + catchNum2 + " if you are paying attention.</h3>" + "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 + style='display:table-cell;'>"},
		choices: [49, 50, 51, 52, 53, 54, 55, 56, 57],
		on_finish: function(data){
			data.task = 1;
            data.decoy = "CatchNums";
			data.choice = data.key_press - 48;
			data.Caught = (catchNum1 + catchNum2) === data.key_press - 48;    
			data.rt = Math.min(5.0 * 1000, data.rt);
		}
    };

    /**Description: catchStimuliDecoys
     * 
     */
    var catchStimuliDecoys = {
            type: "html-button-response",
            stimulus: function(){return"<h3>If you are paying attention, select the " + m_value + " of " + d_value + ".</h3>" +
                "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 + style='display:table-cell;'>"},
            //require_movement: true,
            //button_label: "Continue",
            //min: function(){return low}, 
            //max: function(){return high},
            //slider_start: function(){return med},
            //step: function(){return sum_subs},
            choices: function(){return[String(low), String(med), String(high)]},
            on_finish: function(data){
                data.task = 1;
                data.decoy = "CatchDecoys";
                data.choice = data.key_press;
                
                if(data.response == low_med_high) {
                    data.Caught = 1; 
                } else {
                    data.Caught = 0; 
                }

                  
                data.rt = Math.min(5.0 * 1000, data.rt);
		    }
        
    }

    // Created variable to test different settings/displays. 
    var phantom_tester = {
		type: "html-keyboard-response",
		stimulus: function(){ 
            
            var item_cat = {item: "Category", dimension_1: "D1", dimension_2: "D2"}
            
            var phantom_banner_A = "";
            var phantom_banner_B = "";
            var phantom_banner_C = "";
            //Check if decoy corresponds to phantom. 
            // Usin a (-1) because in 'presentation' added 1 to advance through trials. 
            
            var decoyType = "P";
            var optionA = {position: "P_A", dimension_1: "10", dimension_2: "20"};
            var optionB = {position: "B", dimension_1: "10", dimension_2: "20"};
            var optionC = {position: "A", dimension_1: "10", dimension_2: "20"};
            
            phantom_banner = getPhantomBanner(decoyType, optionA, optionB, optionC)

            //console.log(phantom_banner);

            phantom_banner_A = phantom_banner[0];
            phantom_banner_B = phantom_banner[1];
            phantom_banner_C = phantom_banner[2];
            
            // Identify phantom (option1, 2, or 3).

            return "<div style='position:absolute;top:6%;width:100%;display:table;left:0;'>"+
                "<div style='position:absolute;top:6%;width:50%;display:table;left:27%;'><h2 style='display:table-cell;color:#002AA5;'>"+
			    "" + item_cat.item + "</h2></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:5%;'>"+
                "<h3 style='position:absolute;top:20px;'><br><br>" + item_cat.dimension_1 + ":<br><br><br><br>" +
                item_cat.dimension_2 + ":</h3></div>" + 
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:25%;border: 2px solid black;border-radius: 25px;'>"+
             
                phantom_banner_A + 
                
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option A" + 
                "<br><br><br>" + option_A.dimension_1 + 
                "<br><br><br><br><br>" + option_A.dimension_2 + "</h3></div>" +

                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:50%;border: 2px solid black;border-radius: 25px;'>"+

                phantom_banner_B + 

                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option B" + 
                "<br><br><br>" + option_B.dimension_1 + 
                "<br><br><br><br><br>" + option_B.dimension_2 + "</h3></div>" +

                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:75%;border: 2px solid black;border-radius: 25px;'>"+

                phantom_banner_C +

                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option C" + 
                "<br><br><br>" + option_C.dimension_1 + 
                "<br><br><br><br><br>" + option_C.dimension_2 + "</h3></div>" +
            "</div>" 
		},
		choices: jsPsych.NO_KEYS,
		trial_duration: 18000,
		on_finish: function(data){
		},
    };


    var practice_presentation = {
		type: "html-keyboard-response",
		stimulus: "<div style='position:absolute;top:6%;width:100%;display:table;left:0;'>"+
                "<div style='position:absolute;top:6%;width:50%;display:table;left:27%;'><h2 style='display:table-cell;color:#002AA5;'>" +
			    "" + "Practice" + "</h2></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:5%;'>"+
                "<h3 style='position:absolute;top:20px;'><br><br>" + "D1" + ":<br><br><br><br>" +
                "D2" + ":</h3></div>" + 
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:25%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option A" + "</h3></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:50%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option B" + "</h3></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:75%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option C" + "</h3></div>" +
            "</div>",
		choices: jsPsych.NO_KEYS,
		trial_duration: 3000,
		on_finish: function(data){
            jsPsych.pauseExperiment();
			jsPsych.addNodeToEndOfTimeline(practice_deliberation, jsPsych.resumeExperiment); 
		},
    };

    var practice_deliberation = {
		type: "html-keyboard-response",
		stimulus:  "<div style='position:absolute;top:6%;width:100%;display:table;left:0;'>"+
                "<div style='position:absolute;top:6%;width:50%;display:table;left:27%;'><h2 style='display:table-cell;color:#002AA5;'>"+
			    "" + "Practice" + "</h2></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:5%;'>"+
                "<h3 style='position:absolute;top:20px;'><br><br>" + "D1" + ":<br><br><br><br>" +
                "D2" + ":</h3></div>" + 
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:25%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option A" + 
                "<br><br><br>" + "A1" + 
                "<br><br><br><br><br>" + "A2" + "</h3></div>" +

                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:50%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option B" + 
                "<br><br><br>" + "B1" + 
                "<br><br><br><br><br>" + "B2" + "</h3></div>" +

                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:75%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option C" + 
                "<br><br><br>" + "C1" + 
                "<br><br><br><br><br>" + "C2" + "</h3></div>" +
            "</div>",
		choices: jsPsych.NO_KEYS,
		trial_duration: 2000, //change back to -> 8000; for final version,
		on_finish: function(data){
            jsPsych.pauseExperiment();
			jsPsych.addNodeToEndOfTimeline(practice_choice, jsPsych.resumeExperiment); 
		},
    };

    var practice_choice = {
		type: "html-keyboard-response",
		stimulus: function(){
            return "<div style='position:absolute;top:6%;width:100%;display:table;left:0;'>"+
                "<div style='position:absolute;top:6%;width:50%;display:table;left:27%;'><h2 style='display:table-cell;color:#002AA5;'>"+
			    "" + "Practice" + "</h2></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:5%;'>"+
                "<h3 style='position:absolute;top:20px;'><br><br>" + "D1" + ":<br><br><br><br>" +
                "D2" + ":</h3></div>" + 
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:25%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option A" + "</h3></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:50%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option B" + "</h3></div>" +
                "<div style='position:absolute;top:100px;width:160px;height:420px;display:table;left:75%;border: 2px solid black;border-radius: 25px;'>"+
                "<h3 style='position:absolute;top:5px;right:28px;'>" + "Option C" + "</h3></div>" +
            "</div>" +
            "<div style='position:absolute;bottom:10%;width:50%;display:table;left:27%;'><h3 style='display:table-cell;'>"+
			    "Press 'A', 'B', or 'C'" + "</h3></div>" 
		},
		choices: ['a', 'b', 'c'], //a=65, b=66, c=67,
		trial_duration: 2000,
		on_finish: function(data){

            jsPsych.pauseExperiment();
			jsPsych.addNodeToEndOfTimeline(practice_fixation, jsPsych.resumeExperiment); 

		},
    };


    var practice_fixation = {
		type: 'html-keyboard-response',
		stimulus: function(){ 
            
            var last_choice = jsPsych.data.get().last(1).values()[0].key_press; 
            if(last_choice == 65) {
                last_choice = "A";
            } else if (last_choice == 66) { 
                last_choice = "B";
            } else if (last_choice == 67) {
                last_choice = "C";
            } else {
                last_choice = "ERROR!";
            }
            
            return '<h1 style="font-size:2rem;">'+ 
            last_choice +'</h1>' }, 
		choices: jsPsych.NO_KEYS,
		trial_duration: normalRand(),
        on_finish: function(data){
            jsPsych.pauseExperiment();
			jsPsych.addNodeToEndOfTimeline(countdown_one_start(), jsPsych.resumeExperiment); 
		}	
	};

    /*
    If's variables.
    */

    var ifMainStimuli = {
        timeline: [presentation, deliberation, choice, fixation], 
        conditional_function: function(){
            
            if(1 === 1){
                return true;
            } else {
                return false;
            }
            
        }
    };

    var ifCatch_Nums = {
        timeline: [catchStimuliNums], 
        conditional_function: function(){
              if (catchIndicesNums[catchCounterNums] === 1){
                    //mainIt--;
                    getCatchNums();
                    return true;
              } else {
                    return false;
              }
        }
    };

    var ifCatch_Decoys = {
        timeline: [catchStimuliDecoys], 
        conditional_function: function(){
              if ((catchIndicesDecoys[catchCounterDecoys] === 1) && (decoy_sequence[decoyIt-1] != 'F')) {
                    //mainIt--;
                  
                    getCatchDecoys();

                    return true;
              } else {
                    return false;
              }
        }
    };

  /** Description: mainLoop#
   * Why have 4 'mainLoop' variables? 
   * I initially tried to use 'ifBreak' variables in the mainLoop. These would check whether 'mainIt' matched (25, 50, 75)
   * and detonate a 2 min break which employed an additional 'loop_function'. Bascially, I was trying to nest a loop in a loop.
   * For some reason, the JsPsych generates an error when trying to do this. I tried a couple of alternatives, but ending one 
   * 'loop_function' before starting a new one, was the only one that worked.
   * 
   */

    var mainLoop1 = {
        timeline: [ifMainStimuli, ifCatch_Nums, ifCatch_Decoys], 
        loop_function: function(){
            mainIt++; 
            catchCounterNums++;
            catchCounterDecoys++;
            if (mainIt < 26){ // Number of choices.

                return true;

            } else {
                jsPsych.pauseExperiment();
				jsPsych.addNodeToEndOfTimeline(counter_loop_break_1, jsPsych.resumeExperiment);
                return false;
                }
        }
            
    };

    var mainLoop2 = {
        timeline: [ifMainStimuli, ifCatch_Nums, ifCatch_Decoys], 
        loop_function: function(){
            mainIt++; 
            catchCounterNums++;
            catchCounterDecoys++;
            if (mainIt < 51){ 

                return true;

            } else {
                jsPsych.pauseExperiment();
				jsPsych.addNodeToEndOfTimeline(counter_loop_break_2, jsPsych.resumeExperiment);
                return false;
            }
        }
            
    };

    var mainLoop3 = {
        timeline: [ifMainStimuli, ifCatch_Nums, ifCatch_Decoys], 
        loop_function: function(){
            mainIt++; 
            catchCounterNums++;
            catchCounterDecoys++;
            if (mainIt < 76){ 

                return true;

            } else {

                jsPsych.pauseExperiment();
				jsPsych.addNodeToEndOfTimeline(counter_loop_break_3, jsPsych.resumeExperiment);
                return false;
                
                }
        }
            
    };

    var mainLoop4 = {
        timeline: [ifMainStimuli, ifCatch_Nums, ifCatch_Decoys], 
        loop_function: function(){
            mainIt++; 
            catchCounterNums++;
            catchCounterDecoys++;
            if (mainIt < 100){ 

                return true;

            } else {

                jsPsych.pauseExperiment();
                var all_data = jsPsych.data.get().filter({task: 1}).values();
                formatData(all_data);
				jsPsych.addNodeToEndOfTimeline(TerminateExp, jsPsych.resumeExperiment);
                
                return false;
            }
        }
            
    };


    var counter_loop_start = {
        timeline: [countdown_one], 
        loop_function: function(){
            if(countdown_A < 10) {
                countdown_A++;
                return true;
            } else {
                jsPsych.pauseExperiment();
				jsPsych.addNodeToEndOfTimeline(mainLoop1, jsPsych.resumeExperiment);		
                return false;
            }
        }
    };
    
    var counter_loop_break_1 = {
    
        timeline: [countdown_break1], 
        loop_function: function() {
            if(counter_break_1 != 0) {
                counter_break_1--;
                return true;
            } else {
                jsPsych.pauseExperiment();
                jsPsych.addNodeToEndOfTimeline(end_break, jsPsych.resumeExperiment);
                return false;
            }

        } 
        
    };

    var counter_loop_break_2 = {
        timeline: [countdown_break2], 
        loop_function: function(){
            
            if(counter_break_2 != 0) {
                counter_break_2--;
                return true;
            } else {
                jsPsych.pauseExperiment();
                jsPsych.addNodeToEndOfTimeline(end_break, jsPsych.resumeExperiment);
                return false;
            }

        }
    }

    var counter_loop_break_3 = {
        timeline: [countdown_break3], 
        loop_function: function(){
            if(counter_break_3 != 0) {
                counter_break_3--;
                return true;
            } else {
                jsPsych.pauseExperiment();
                jsPsych.addNodeToEndOfTimeline(end_break, jsPsych.resumeExperiment);
                return false;
            }
        }
    }


    /*
    current_good.dimension_1 = "Size of hard drive (Gb)"; 
    current_good.dimension_2 = "Speed (gHz)";

    option_A.dimension_1 = 830; 
    option_B.dimension_1 = 1150;
    option_C.dimension_1 = 830;

    option_A.dimension_2 = 3.0; 
    option_B.dimension_2 = 2.5;
    option_C.dimension_2 = 3.2;

    jsPsych.addNodeToEndOfTimeline(catchStimuliDecoys(), jsPsych.resumeExperiment);
    */
    
    jsPsych.addNodeToEndOfTimeline(InstructionScreen(), jsPsych.resumeExperiment);

}