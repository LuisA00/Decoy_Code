function ZDecoy_demo(timeline) {

    // Get counpling and phantom condition. 
    var coupling_instructions = "";        
	if(coupling_condition > 0) {
        c_condition = "Low coupling";
        coupling_instructions = "THREE RANDOMLY CHOSEN";
	} else {
        c_condition = "High coupling";
        coupling_instructions = "THREE EQUALLY (UN)POPULAR";
    }

    var phantom_ints = "";
    var phantom_instructions = "";
    if(phantom_condition == "Highly_desirable"){
        phantom_ints = "Out of stock";
        //"Out of stock";
        phantom_instructions = "Note, some of the products might be OUT OF STOCK due to high demand.";
    } else if (phantom_condition == "Weakly_desirable") {
        phantom_ints = "Delayed shipping";
        //phantom_ints = "Out of stock";
        phantom_instructions = "Note, some of the products might be unavailable due to a SHIPPING DELAY.";
    } else {
        phantom_ints = "Discontinued";
        //phantom_ints = "Out of stock";
        phantom_instructions = "Note, some of the products might be DISCONTINUED due to low demand.";
    }

    /**
     * P -> Phantom 
     * A -> Attraction 
     * S -> Similarity
     * C -> Compromise
     */
    var decoy_types = ["P", "A", "S", "C"]

    //Item Name, First dimension, & Second dimension
    var cs_names = [["Air purifier", "Coverage (s.f.)", "Filter life span (months)"],
    ["Leaf Blower", "Battery life (min)", "Air speed (mph)"],
    ["Night light", "Brightness (lm)", "Battery life (wks)"],
    ["Pesticide", "Coverage (s.f.)", "Protection (months)"],
    ["Pill dispenser", "Capacity (pills)", "Alarms per day"],
    ["Car seat", "Weight capacity (lb)", "Safety rating"],
    ["Vacuum", "Suction power (Pa)", "Capacity (L)"],
    ["Lawn mower", "Cutting width (in)", "Battery life (min)"],
    ["Paint sprayer", "Capacity (ml)", "Pressure (PSI)"],
    ["UV lamp", "Brightness (lux)", "Bulb life (hours)"], // Might delete
    ["Baby high chair", "Safety rating (lb.)", "Warranty (months)"],
    ["White noise machine", "Noise reduction (dB)", "Warranty (months)"],
    ["Oximeter", "Accuracy", "Battery life (uses)"],
    ["Cloth diapers", "Weight limit (lb)", "Expected lifetime (months)"],
    ["Headlight bulbs", "Brightness (lm)", "Expected lifespan (hours)"],
    ["Smart lock", "Battery duration (months)", "Warranty (months)"],
    ["Wifi extender", "Range (s.f.)", "Speed (Mgps)"],
    ["Rash cream", "Pediatrician rating", "Size (oz)"],
    ["Odor neutralizer", "Duration (days)", "Coverage (s.f.)"],
    ["Car vacuum", "Suction power (amps)", "Cord length (ft)"],
    ["Electric mop", "Battery duration (min)", "Capacity (ml)"],
    ["Tire inflator", "Maximum pressure (PSI)", "Operating time (min)"],
    ["Metal detector", "Sensitivity (in)", "Battery life (hours)"],
    ["Puree machine", "Capacity (ml)", "Blending speed (Hz)"],
    ["Baby stroller", "Weight limit (lbs)", "Warranty (months)"],
    ["Clothes Steamer", "Capacity (ml)", "Pressure (g/min)"],
    ["Air Fryer Oven", "Basket size (qt)", "<span>Max. Temperature (&#8457;)</span>"], // Might need to add special character
    ["Mobility scooter", "Driving range (miles)", "Weight limit (lbs)"],
    ["Hearing aid", "Battery duration (hours)", "Sensitivity (Hz)"],
    ["Shower chair", "Weight limit (lbs)", "Adjustable height"], // Might change 'adjustable height'
    ["Air mattress", "Height (in)", "Weight limit (lbs)"],
    ["Insect repellent", "Protection (hours)", "Size (oz)"],
    ["Massage gun", "Max force (lbs)", "Speed (rpm)"],
    ["Slow cooker", "Capacity (qt)", "Warranty (months)"],
    ["Pressure washer", "Pressure (PSI)", "Flow rate (GPM)"],
    ["Water heater", "Capacity (L)", "Flow rate (GPM)"],
    ["Ride-on kids car", "Battery duration (min)", "Speed (mph)"],
    ["Smart bulb", "Brightness (lm)", "Lifespan (years)"],
    ["Security camera", "Field of view (degrees)", "Battery duration (months)"],
    ["Baby crib", "Height (in)", "Weight limit (lbs)"]];

   var cs_values = [[["1150", "1850", "1160", "2100", "1150", "1500", "1300", "1700", "500", "2500"], ["9", "6", "10", "6", "7.5", "6", "8.5", "6.5", "12", "3"]],
   [["80", "85", "80", "87", "80", "85", "81", "84", "75", "90"], ["145", "120", "155", "120", "135", "120", "140", "125", "170", "100"]],
   [["170", "260", "170", "295", "170", "215", "190", "240", "80", "350"], ["9", "7", "10", "7", "8", "7", "9", "7", "12", "4"]],
   [["10200", "15100", "8240", "15100", "10200", "12650", "11180", "14120", "5300", "20000"], ["9", "6", "9", "5", "7.5", "6", "8.5", "7", "12", "3"]],
   [["14", "16", "14", "17", "14", "15", "14", "16", "12", "18"], ["18", "12", "20", "12", "15", "12", "17", "13", "24", "6"]],

   [["80", "100", "80", "110", "80", "90", "85", "95", "60", "120"], ["11", "8", "13", "8", "9.5", "8", "11", "8", "15", "4"]],
   [["1850", "2450", "1850", "2650", "1850", "2150", "2000", "2300", "1300", "3000"], ["2", "1", "2.5", "1", "1.7", "1", "2", "1.5", "3", "0.5"]],
   [["16.5", "18.5", "16.5", "19.5", "16.5", "17.5", "17", "18", "14", "21"], ["55", "45", "60", "45", "50", "45", "55", "45", "70", "30"]],
   [["1150", "1350", "1150", "1400", "1150", "1250", "1200", "1300", "1000", "1500"], ["11", "7", "12.5", "7", "9", "7", "10", "8", "15", "3"]],
   [["10650", "11350", "10650", "11600", "10650", "11000", "10800", "11200", "10000", "12000"], ["8.5", "7.5", "9", "7.5", "8", "7.5", "8.5", "7.5", "10", "6"]],

   [["110", "180", "110", "210", "110", "145", "125", "165", "40", "250"], ["26", "16", "30", "16", "21", "16", "24", "18", "36", "6"]],
   [["27", "33", "27", "36", "27", "30", "28", "32", "20", "40"], ["18", "12", "20", "12", "15", "12", "17", "13", "24", "6"]],
   [["80", "89", "80", "93", "80", "85", "82", "97", "70", "99"], ["535", "465", "560", "465", "500", "465", "520", "480", "600", "400"]],
   [["18", "25", "18", "28", "18", "21", "19", "24", "10", "33"], ["28", "20", "30", "20", "24", "20", "26", "22", "36", "12"]],
   [["14500", "17500", "14500", "18500", "14500", "16000", "15500", "17000", "12000", "20000"], ["43500", "36500", "46000", "36500", "40000", "36500", "42000", "38000", "50000", "30000"]],

   [["6", "9", "6", "10", "6", "8", "7", "8", "3", "12"], ["12", "10", "16", "10", "12", "10", "13", "11", "18", "6"]],
   [["1750", "2250", "1750", "2500", "1750", "2000", "1850", "2150", "1200", "2800"], ["1650", "1450", "1750", "1450", "1550", "1450", "1600", "1500", "1900", "1200"]],
   [["22", "31", "22", "35", "22", "27", "24", "29", "13", "40"], ["11", "7", "13", "7", "9", "7", "10", "8", "16", "2"]],
   [["58", "74", "58", "80", "58", "65", "60", "70", "42", "90"], ["47", "33", "52", "33", "40", "33", "44", "36", "60", "20"]],
   [["9", "10", "9", "11", "9", "9.5", "9", "10", "7", "12"], ["20", "16", "22", "16", "18", "16", "19", "17", "24", "12"]],

   [["45", "65", "45", "75", "45", "55", "50", "60", "20", "90"], ["570", "430", "620", "430", "500", "430", "540", "460", "700", "300"]],
   [["120", "140", "120", "150", "120", "130", "125", "135", "100", "160"], ["35", "25", "40", "25", "30", "25", "35", "30", "45", "15"]],
   [["8", "12", "8", "13.5", "8", "10", "9", "11", "4", "16"], ["10", "8", "11", "8", "9", "8", "9.5", "8.5", "12", "6"]],
   [["400", "700", "400", "820", "400", "550", "460", "640", "100", "1000"], ["300", "210", "340", "210", "260", "210", "280", "230", "390", "120"]],
   [["60", "80", "60", "90", "60", "70", "65", "75", "40", "100"], ["24", "18", "26", "18", "21", "18", "22", "20", "30", "12"]],

   [["470", "680", "470", "770", "470", "575", "510", "640", "250", "900"], ["65", "45", "75", "45", "55", "45", "60", "50", "90", "20"]],
   [["6", "9", "6", "10", "6", "7.5", "6.5", "8.5", "3", "12"], ["420", "360", "440", "360", "390", "360", "410", "370", "480", "300"]],
   [["15", "20", "15", "22", "15", "17.5", "16", "19", "10", "25"], ["270", "230", "280", "230", "250", "230", "260", "240", "300", "200"]],
   [["40", "50", "40", "55", "40", "45", "40", "50", "30", "60"], ["5300", "4500", "5600", "4500", "4900", "4500", "5100", "4700", "6000", "3800"]],
   [["250", "300", "250", "320", "250", "275", "260", "290", "200", "350"], ["12", "8", "14", "8", "10", "8", "11", "9", "16", "4"]],

   [["13", "17", "13", "19", "13", "15", "14", "16", "9", "21"], ["700", "500", "800", "500", "600", "500", "650", "500", "900", "300"]],
   [["6", "9", "6", "10", "6", "7.5", "6.5", "8.5", "3", "12"], ["11", "7", "12.5", "7", "9", "7", "10", "8", "15", "3"]],
   [["18", "24", "18", "26", "18", "21", "19", "23", "12", "30"], ["3100", "2700", "3300", "2700", "2900", "2700", "3000", "2800", "3500", "2300"]],
   [["5", "7", "5", "8", "5", "6", "5.5", "6.5", "3", "9"], ["18", "12", "20", "12", "15", "12", "16", "14", "24", "6"]],
   [["2200", "2600", "2200", "2750", "2200", "2400", "2300", "2500", "1800", "3000"], ["2.5", "2", "2.7", "2", "2.2", "2", "2.4", "2.1", "3", "1.5"]],

   [["11", "16", "11", "18", "11", "13.5", "12", "15", "6", "21"], ["9", "6", "10", "6", "7.5", "6", "8.5", "6.5", "12", "3"]],
   [["80", "100", "80", "110", "80", "90", "85", "95", "60", "120"], ["7", "5", "8", "5", "6", "5", "6.5", "5.5", "9", "3"]],
   [["1000", "1400", "1000", "1550", "1000", "1200", "1100", "1300", "600", "1800"], ["4.5", "2.5", "5", "2.5", "3.5", "2.5", "4", "3", "6", "1"]],
   [["130", "160", "130", "170", "130", "145", "135", "155", "100", "190"], ["5", "3", "6", "3", "4", "3", "4.5", "3.5", "7", "1"]],
   [["30", "35", "30", "40", "30", "32.5", "30", "35", "20", "45"], ["80", "60", "90", "60", "70", "60", "75", "65", "100", "40"]]
   ];

   var practice_stim_names = [["Power bank", "Power (mAh)", "Life expectancy (uses)"],
   ["Wireless speaker", "Volume range (dB)", "Battery (hours)"],
   ["External hard drive", "Memory (TB)", "Max speed (mbps)"],
   ["Jigsaw puzzle", "Pieces", "Difficulty rating"],
   ["Bug zapper", "Coverage (sq. ft.)", "Bulb life (hours)"]];

   var practice_stim_values = [[["5000", "20000", "12000"], ["700", "550", "600"]],
   [["110", "80", "100"], ["6", "15", "10"]],
   [["5.0", "1.0", "3.0"], ["100", "200", "160"]],
   [["2000", "1500", "900"], ["10", "8", "5"]],
   [["2000", "750", "1500"], ["4000", "8000", "6500"]]];

   var demo_fillers_names = [ ["Electric razor", "Battery (min)", "Blade durability (months)"],
   ["Rechargeable AA batteries", "Capacity (mAh)", "Expected lifespan (uses)"],
   ["Wagon cart", "Weight limit (lbs)", "Compartment volume (ft3)"], //fix 'ft3'
   ["Microwave", "Cooking power (watts)", "Warranty (months)"],
   ["Protein powder", "Protein (g's per serving) ", "Size (lbs)"],
   ["Electric kettle", "Capacity (L)", "Power (watts)"],
   ["Garbage disposal", "Power (horsepower)", "Expected lifespan (yrs)"],
   ["Surge protector", "Max protection (joules) ", "Cord (in)"],
   ["Outdoor TV antenna", "Range (miles)", "Channels received"],
   ["Fire extinguisher", "Size (lbs)", "Life expectancy (years)"],
   ["Pepper spray", "Range (ft.)", "Shell life (years)"],
   ["Megaphone", "Power (watts)", "Battery life (hours)"],
   ["Outdoor solar lights", "LED's", "Battery (hours)"],
   ["Kitchen Scale", "Surface area (sq. in.)", "Warranty (months)"],
   ["Thermometer gun", "Range (in.)", "Battery (hours)"],
   ["Inflatable baby pool", "Diameter (in.)", "Expected lifetime (years)"],
   ["Baby rocker", "Max weight (lbs.)", "Battery (hours)"],
   ["Sunscreen", "Sun protection factor", "Size (fl. oz.)"],
   ["Automatic pet feeder", "Size (L)", "Battery (days)"],
   ["Stun gun", "Power (volts)", "Battery (hours)"]];

   // First dimension (A1, B1, C1) and second dimension (A2, B2, C2)
   var demo_fillers_cs = [[["40", "90", "80"], ["18", "6", "16"]],
   [["3300", "2200", "3100"], ["900", "1200", "1150"]],
   [["180", "150", "175"], ["2.5", "4.2", "4.0"]],
   [["1250", "950", "1200"], ["6", "18", "16"]],
   [["30", "20", "28"], ["1", "5", "4.5"]],
   [["1.7", "0.8", "1.5"], ["1200", "1700", "1600"]],
   [["1.00", "0.33", "0.90"], ["5", "20", "15"]],
   [["4300", "1500", "4100"], ["6'", "10'", "9'"]],
   [["100", "25", "90"], ["30", "80", "75"]],
   [["10", "2.5", "9"], ["6", "12", "10"]],
   [["20", "8", "18"], ["2", "5", "5"]],
   [["50", "20", "45"], ["2", "7", "6"]],
   [["250", "100", "230"], ["6", "12", "10"]],
   [["50", "25", "45"], ["12", "36", "30"]],
   [["16", "10", "15"], ["12", "24", "24"]],
   [["50", "20", "45"], ["2", "5", "5"]],
   [["40", "20", "40"], ["30", "60", "55"]],
   [["70", "30", "65"], ["2.0", "8.0", "7.0"]],
   [["6", "4", "6"], ["10", "25", "20"]],
   [["100,000", "50,000", "90,000"], ["20", "50", "45"]]];

   var mainIt = 0; // Goes from 0-99; +1 each trial, no matter if decoy or filler. 
   var decoyIt = 0; // Goes from 0-79; +1 each decoy trial 
   var stimuliIt = 0; // Goes from 0-99; +1 each trial, no matter if decoy or filler. => Delete latter, redundant variable.
   var fillerIt = 0; // Goes from 0-19; +1 each time there is a filler trial. 
   var practiceIt = 0; // Goes from 0-4; +1 for each practice trial; if x=4, it resets to 0. 

   var countdown_A = 0;
   var counter1 = 0;  
    
   var counter_break_1 = 30;
   var counter_break_2 = 120;
   var counter_break_3 = 120;
   var counter2 = 0;
   var practice_rt = 0; // 'practiceLoop' runs if (rt >= 2000); set to zero so if runs once, then depends on participants choice rt. 

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

    function getPracticeSequence() {

        var p_range = [0, 1, 2, 3, 4];

        var rand_p_range = jsPsych.randomization.shuffle(p_range);

        return rand_p_range;

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

    function getPracticeOptions(stimulus) {

        // This will help randomizing the position of options. 
        var options =  [[0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]]; 

        // Set the three options
        options[0][0] = "A"  
        options[0][1] =  practice_stim_values[stimulus][0][0] 
        options[0][2] =  practice_stim_values[stimulus][1][0] 

        options[1][0] = "B"
        options[1][1] = practice_stim_values[stimulus][0][1]
        options[1][2] = practice_stim_values[stimulus][1][1]

        options[2][0] = "C"
        options[2][1] = practice_stim_values[stimulus][0][2]
        options[2][2] = practice_stim_values[stimulus][1][2]

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
    function getOptions(stimulus, target, decoy) {

        // This will help randomizing the position of options. 
        var options =  [
            [0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]
        ]; 

        // Set first two options
        options[0][0] = "A"  //position
        options[0][1] =  cs_values[stimulus][0][0] // dimension1
        options[0][2] =  cs_values[stimulus][1][0] // dimension2

        options[1][0] = "B"
        options[1][1] = cs_values[stimulus][0][1]
        options[1][2] = cs_values[stimulus][1][1]
        
        if((target == "A") && (decoy == "P")){

            console.log("P_A");
            options[2][0] = "P_A"
            options[2][1] = cs_values[stimulus][0][2];
            options[2][2] = cs_values[stimulus][1][2];

        } else if ((target == "B") && (decoy == "P")) {

            console.log("P_B");
            options[2][0] = "P_B"
            options[2][1] = cs_values[stimulus][0][3];
            options[2][2] = cs_values[stimulus][1][3];

        } else if ((target == "A") && (decoy == "A")) {

            console.log("A_A");
            options[2][0] = "A_A"
            options[2][1] = cs_values[stimulus][0][4];
            options[2][2] = cs_values[stimulus][1][4];

        } else if ((target == "B") && (decoy == "A")) {

            console.log("A_B");
            options[2][0] = "A_B"
            options[2][1] = cs_values[stimulus][0][5];
            options[2][2] = cs_values[stimulus][1][5];

        } else if ((target == "A") && (decoy == "S")) {

            console.log("S_A");
            options[2][0] = "S_A"
            options[2][1] = cs_values[stimulus][0][6];
            options[2][2] = cs_values[stimulus][1][6];

        } else if ((target == "B") && (decoy == "S")) {

            console.log("S_B");
            options[2][0] = "S_B"
            options[2][1] = cs_values[stimulus][0][7];
            options[2][2] = cs_values[stimulus][1][7];

        } else if ((target == "A") && (decoy == "C")) {

            console.log("C_A");
            options[2][0] = "C_A"
            options[2][1] = cs_values[stimulus][0][8];
            options[2][2] = cs_values[stimulus][1][8];

        } else if ((target == "B") && (decoy == "C")) {

            console.log("C_B");
            options[2][0] = "C_B"
            options[2][1] = cs_values[stimulus][0][9];
            options[2][2] = cs_values[stimulus][1][9];

        } else if (decoy == "F"){
           
            console.log("F");
            options[0][0] = "A"  
            options[0][1] =  demo_fillers_cs[stimulus][0][0];
            options[0][2] =  demo_fillers_cs[stimulus][1][0];

            options[1][0] = "B"
            options[1][1] = demo_fillers_cs[stimulus][0][1];
            options[1][2] = demo_fillers_cs[stimulus][1][1];

            options[2][0] = "C"
            options[2][1] = demo_fillers_cs[stimulus][0][2];
            options[2][2] = demo_fillers_cs[stimulus][1][2];
            
            
        } else {
            console.log("ERROR in 'getOptions'");
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

        var phantom_ints = "Discontinued"

        if(decoy == "P"){

            if((optionA.position == "P_A" && phantom_ints == "Out of stock") || (optionA.position == "P_B" && phantom_ints == "Out of stock")) {
             
                banners[0] = "<p style='position:absolute;top:30%;right:22%;height:30%;width:80%;font-size:4vw;font-weight:bold;line-height:1.0;letter-spacing:1%;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</p>" 

            } else if((optionB.position == "P_A" && phantom_ints == "Out of stock") || (optionB.position == "P_B" && phantom_ints == "Out of stock")) {

                banners[1] = "<p style='position:absolute;top:30%;right:22%;height:30%;width:80%;font-size:4vw;font-weight:bold;line-height:1.0;letter-spacing:1%;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</p>" 

            } else if((optionC.position == "P_A" && phantom_ints == "Out of stock") || (optionC.position == "P_B" && phantom_ints == "Out of stock")) {

                banners[2] = "<p style='position:absolute;top:30%;right:22%;height:30%;width:80%;font-size:4vw;font-weight:bold;line-height:1.0;letter-spacing:1%;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</p>" 

            } else if((optionA.position == "P_A" && phantom_ints == "Delayed shipping") || (optionA.position == "P_B" && phantom_ints == "Delayed shipping")) {

                banners[0] = "<p style='position:absolute;top:17%;left:0%;height:40%;font-size:4vw;font-weight:bold;line-height:1.0;letter-spacing:1%;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</p>" 

            } else if((optionB.position == "P_A" && phantom_ints == "Delayed shipping") || (optionB.position == "P_B" && phantom_ints == "Delayed shipping")) {

                banners[1] = "<p style='position:absolute;top:17%;left:0%;height:40%;font-size:4vw;font-weight:bold;line-height:1.0;letter-spacing:1%;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</p>" 

            } else if((optionC.position == "P_A" && phantom_ints == "Delayed shipping") || (optionC.position == "P_B" && phantom_ints == "Delayed shipping")) {

                banners[2] = "<p style='position:absolute;top:17%;left:0%;height:40%;font-size:4vw;font-weight:bold;line-height:1.0;letter-spacing:1%;color:#C70039;opacity: 0.2;transform: rotate(-75deg);'>" + phantom_ints + "</p>" 

            } else if((optionA.position == "P_A" && phantom_ints == "Discontinued") || (optionA.position == "P_B" && phantom_ints == "Discontinued")) {

                banners[0] = "<p style='position:absolute;top:24%;left:-22%;height:30%;font-size:4vw;font-weight:bold;line-height:1.0;letter-spacing:1%;color:#C70039;opacity: 0.2;transform: rotate(-68deg);'>" + phantom_ints + "</p>" 

            } else if((optionB.position == "P_A" && phantom_ints == "Discontinued") || (optionB.position == "P_B" && phantom_ints == "Discontinued")) {

                banners[1] = "<p style='position:absolute;top:24%;left:-22%;height:30%;font-size:4vw;font-weight:bold;line-height:1.0;letter-spacing:1%;color:#C70039;opacity: 0.2;transform: rotate(-68deg);'>" + phantom_ints + "</p>" 

            } else if((optionC.position == "P_A" && phantom_ints == "Discontinued") || (optionC.position == "P_B" && phantom_ints == "Discontinued")) {

                banners[2] = "<p style='position:absolute;top:24%;left:-22%;height:30%;font-size:4vw;font-weight:bold;line-height:1.0;letter-spacing:1%;color:#C70039;opacity: 0.2;transform: rotate(-68deg);'>" + phantom_ints + "</p>" 

            }else {
                console.log("Error in 'getPhantomBanner()")
            }


        }

        return banners

    }

    // Description
    function getPhantomChoiceKeys(decoy, optionA, optionB, optionC) {

        var choices_normal_decoy = [49, 50, 51] //['a', 'b', 'c'] 
        var choices_phantom_a = [50, 51] //['b', 'c'] 
        var choices_phantom_b = [49, 51] //['a', 'c'] 
        var choices_phantom_c = [49, 50] //['a', 'b'] 

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
    function getChoiceBanner(decoy, optionA, optionB, optionC) {

        var choice_banner_normal_decoy = "<div style='position:absolute;bottom:9%;width:50%;display:table;left:27%;'><p style='display:table-cell;font-size:2.4vw;font-weight:bold;color:#478778'>Press '1', '2', or '3'</p></div>"; 
        var choice_banner_phantom_a = "<div style='position:absolute;bottom:9%;width:50%;display:table;left:27%;'><p style='display:table-cell;font-size:2.4vw;font-weight:bold;color:#478778'>Press '2' or '3'</p></div>";
        var choice_banner_phantom_b = "<div style='position:absolute;bottom:9%;width:50%;display:table;left:27%;'><p style='display:table-cell;font-size:2.4vw;font-weight:bold;color:#478778'>Press '1' or '3'</p></div>";
        var choice_banner_phantom_c = "<div style='position:absolute;bottom:9%;width:50%;display:table;left:27%;'><p style='display:table-cell;font-size:2.4vw;font-weight:bold;color:#478778'>Press '1' or '2'</p></div>";

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

    }

    function normalRand() {
        return (Math.sqrt((-2)*Math.log(Math.random()))*Math.cos(2*Math.PI*Math.random())) * fixationSTDev + fixationMean 
    }

    // Description
    function setDecoyOptions(decoy_idx, filler_idx, stimuli_idx) {

        var decoy_i = decoy_idx; 
        var filler_i = filler_idx;
        var stimuli_i = stimuli_idx;

        if(decoy_sequence[decoy_i] == "F") {
            console.log("fillerIt: " + String(filler_i));
            // Update item category according to sequence
            current_good.item = demo_fillers_names[filler_sequence[filler_i]][0];
            current_good.dimension_1 = demo_fillers_names[filler_sequence[filler_i]][1];
            current_good.dimension_2 = demo_fillers_names[filler_sequence[filler_i]][2];
            var current_stimulus = filler_sequence[filler_i]
            var current_decoy = decoy_sequence[decoy_i];
            var current_options = getOptions(current_stimulus, current_target, current_decoy);

            option_A.position = current_options[0][0]; 
            option_A.dimension_1 = current_options[0][1];
            option_A.dimension_2 = current_options[0][2];
            option_B.position = current_options[1][0];
            option_B.dimension_1 = current_options[1][1];
            option_B.dimension_2 = current_options[1][2];
            option_C.position = current_options[2][0];
            option_C.dimension_1 = current_options[2][1];
            option_C.dimension_2 = current_options[2][2];

        } else {
            // Update item category according to sequence
            current_good.item = cs_names[stimuli_sequence[stimuli_i]][0];
            current_good.dimension_1 = cs_names[stimuli_sequence[stimuli_i]][1];
            current_good.dimension_2 = cs_names[stimuli_sequence[stimuli_i]][2];
            var current_decoy = decoy_sequence[decoy_i];
            var current_stimulus = stimuli_sequence[stimuli_i];
            console.log("current item: " + String(stimuli_sequence[stimuli_i]) + " " + String(current_good.item) + " " + String(current_decoy));
            // Check if this item has already been encountered. 
            if(target_monitoring[current_good.item] !== undefined) {
                // 'current_target' = 1 -> Target A
                // 'current_target' = 0 -> Target B
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

    }

    /**
     * data.Stage: 0 -> Practice; 1 -> Presentation; 2 -> Deliberation; 3 -> Choice
     * data.decoy: A -> Attraction; C -> Compromise; P -> Phantom; Similarity
     * data.Item: Name of item presented
     * data.Option_1: A, B, or []. Shows the position of each item. 
     * data.Option_2: A, B, or []. Shows the position of each item.
     * data.Option_3: A, B, or []. Shows the position of each item.
     * data.Choice: A, B, or Decoy. Shows participants choice. 
     */

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
				"Caught": data[i].Caught,
				"Deliberation_RT": data[i].Deliberation_time, 
                "Choice_RT": data[i].Choice_time,
                "Too_Slow": data[i].Too_Slow,
				//"Stimulus_Onset": (data[i].time_elapsed * 0.001 - data[i].rt * 0.001),
				//"Actual_Response_time": data[i].time_elapsed * 0.001,
				//"Too_Fast": (data[i].rt > 200 || data[i].rt === 0 ? 0 : 1),
                //"Response_Time": data[i].resp_t* 0.001, //* 0.001,		
			};
			allTrialsJson['Trials'].push(newTrialJson);
		}
	};

    var stimuli_sequence = getStimuliSequence();
    console.log("stimuli_sequence" + String(stimuli_sequence.length) + ": " + String(stimuli_sequence));


    var decoy_sequence = getDecoySequence();
    // Display decoys sequence
    console.log("Decoy_sequence: " + decoy_sequence);

    var filler_sequence = getFillersSequence();
    console.log("filler_sequence: " + String(filler_sequence));

    var practice_sequence = getPracticeSequence();

    // Useful to manipulate keys and banners displayed in phantom decoys trials. 
    // If there is a phantom decoy in position A, participants only get choices 'B' and 'C'.
    var choices_keys = "";
    var choices_banner = "";


    // Might not be necessary having this variable as a function.
    var InstructionScreen = function(){ 
		return {
			type: "html-keyboard-response",
			stimulus: "<div style='position:absolute;top:30%;width:65%;display:table;left:17.5%;'><p style='display:table-cell;font-size:1.5em;font-weight:bold;line-height:1.4;text-align:justify;'>" +
                "Company X is running a 'Survey of Consumer Preferences' to update their upcoming seasonal catalog. " +
                "Suppose you are a participant in this survey. Please enter your preferences as truthfully as possible.</p></div>" +
				"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><p style='display:table-cell;font-size:1.4em;font-weight:bold;'>"+
			    "Press " + "<span style='font-size: 25pt; font-weight: bold'>&#8592;</span>" + " to go back or press " + "<span style='font-size: 25pt; font-weight: bold'>&#8594;</span>" + " to continue.</p></div>",
                choices: [39, 37],
			on_finish: function(){
					jsPsych.pauseExperiment();
                    if(37 == jsPsych.data.get().last(1).values()[0].key_press){
                        jsPsych.addNodeToEndOfTimeline(welcome, jsPsych.resumeExperiment);
                    } else {
                        jsPsych.addNodeToEndOfTimeline(InstructionScreen2(), jsPsych.resumeExperiment);
                    }

                    //jsPsych.addNodeToEndOfTimeline(mainLoop, jsPsych.resumeExperiment);
                    //jsPsych.addNodeToEndOfTimeline(phantom_tester, jsPsych.resumeExperiment);
			}
    }};

    var InstructionScreen2 = function() {
        return {
            type: "html-keyboard-response",
            stimulus: "<div style='position:absolute;top:30%;width:65%;display:table;left:17.5%;'><p style='display:table-cell;font-size:1.5em;font-weight:bold;line-height:1.4;text-align:justify;'>" +
                "In the survey, you will be presented with a choice set of " + coupling_instructions + " items for each category, which vary among two attribute dimensions. " + 
                "In general, larger attribute values are more preferable."+"</p></div>" +
                "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><p style='display:table-cell;font-size:1.4em;font-weight:bold;'>"+
			    "Press " + "<span style='font-size: 25pt; font-weight: bold'>&#8592;</span>" + " to go back or press " + "<span style='font-size: 25pt; font-weight: bold'>&#8594;</span>" + " to continue.</p></div>",
            choices: [39, 37],
			on_finish: function(){
                jsPsych.pauseExperiment();
                if(37 == jsPsych.data.get().last(1).values()[0].key_press){
                    jsPsych.addNodeToEndOfTimeline(InstructionScreen(), jsPsych.resumeExperiment);
                } else {
                    jsPsych.addNodeToEndOfTimeline(InstructionScreen3(), jsPsych.resumeExperiment);
                }
            }
        }
    };

    var InstructionScreen3 = function(){
        return {
            type: "html-keyboard-response",
            stimulus: "<div style='position:absolute;top:30%;width:65%;display:table;left:17.5%;'><p style='display:table-cell;font-size:1.5em;font-weight:bold;line-height:1.4;text-align:justify;'>" +
                "Your task is to select the item you are most likely to purchase among the options, all else being equal (such as price). " +
                phantom_instructions + " At the end of the survey/experiment, you will be entered into a lottery to receive one of your chosen items."+
                "So consider your choices carefully." + "</p></div>" +
                "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><p style='display:table-cell;font-size:1.4em;font-weight:bold;'>"+
			    "Press " + "<span style='font-size: 25pt; font-weight: bold'>&#8592;</span>" + " to go back or press " + "<span style='font-size: 25pt; font-weight: bold'>&#8594;</span>" + " to continue.</p></div>",
            choices: [39, 37],
            on_finish: function(){
                jsPsych.pauseExperiment();
                if(37 == jsPsych.data.get().last(1).values()[0].key_press){
                    jsPsych.addNodeToEndOfTimeline(InstructionScreen2(), jsPsych.resumeExperiment);
                } else {
                    jsPsych.addNodeToEndOfTimeline(InstructionScreen4(), jsPsych.resumeExperiment);
                }
            }
        }
    };

    var InstructionScreen4 = function() {
        return {
            type: "html-keyboard-response",
            stimulus: "<div style='position:absolute;top:30%;width:65%;display:table;left:17.5%;'><p style='display:table-cell;font-size:1.5em;font-weight:bold;line-height:1.4;text-align:justify;'>" +
                "Each choice in the survey consists of two phases. In the presentation phase, you will be shown the options with their attributes for 10 seconds. " +
                "In the choice phase (5 seconds), press 1, 2, or 3 to indicate which item you are most likely to acquire. " + "</p></div>" +
                "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><p style='display:table-cell;font-size:1.4em;font-weight:bold;'>"+
			    "Press " + "<span style='font-size: 25pt; font-weight: bold'>&#8592;</span>" + " to go back or press " + "<span style='font-size: 25pt; font-weight: bold'>&#8594;</span>" + " to continue.</p></div>",
            choices: [39, 37],
            on_finish: function(){
                jsPsych.pauseExperiment();
                if(37 == jsPsych.data.get().last(1).values()[0].key_press){
                    jsPsych.addNodeToEndOfTimeline(InstructionScreen3(), jsPsych.resumeExperiment);
                } else {
                    jsPsych.addNodeToEndOfTimeline(practice_trial, jsPsych.resumeExperiment);
                }
            }
        }
    };

    var practice_trial = { 
        type: "html-keyboard-response",
		stimulus: "<div style='position:absolute;top:30%;width:65%;display:table;left:17.5%;'><p style='display:table-cell;font-size:1.5em;font-weight:bold;line-height:1.4;text-align:justify;'>" + 
            "Before starting the survey, you will complete a brief practice session. Remember, examine your options, then press 1, 2, or 3 to select an item.</p></div>" +
			"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><p style='display:table-cell;font-size:1.4em;font-weight:bold;'>"+
			"Press " + "<span style='font-size: 25pt; font-weight: bold'>&#8592;</span>" + " to go back or press " + "<span style='font-size: 25pt; font-weight: bold'>&#8594;</span>" + " to start practice session.</p></div>",
		choices: jsPsych.ALL_KEYS,
		on_finish: function(){
			jsPsych.pauseExperiment();
            if(37 == jsPsych.data.get().last(1).values()[0].key_press){
                jsPsych.addNodeToEndOfTimeline(InstructionScreen4(), jsPsych.resumeExperiment);
            } else {
                jsPsych.addNodeToEndOfTimeline(practiceLoop, jsPsych.resumeExperiment);
            }       
		}
    };

    var countdown_one_start = function(){ 
        
        return {type: "html-keyboard-response",
            stimulus: "<p style='display:table-cell;font-size:1.5em;font-weight:bold;'>" +
                    "Good job!<br><br>Are you ready?</p>" +
                    "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><p style='display:table-cell;font-size:1.4em;font-weight:bold;'>"+ 
                    "Press any key to continue</p></div>",
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
            return "<p style='font-size:1.5em;font-weight:bold;'>" + 
            "The experiment will begin in:</p>" +
            "<div style='position:absolute;top:620px;width:100%;display:table;left:0;'><p style='display:table-cell;font-size:1.4em;font-weight:bold;'>"+
            String(counter1) + "</p></div>"},
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

            return "<p style='font-size:1.5em;font-weight:bold;'>" + 
            "Break</p>" + "<div style='position:absolute;top:620px;width:100%;display:table;left:0;'>" + 
            "<p style='display:table-cell;font-size:1.4em;font-weight:bold;'>" + String(counter2) + "</p></div>"
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

            return "<p style='font-size:1.5em;font-weight:bold;'>" +
            "Break 2 of 3.</p>" +
            "<div style='position:absolute;top:620px;width:100%;display:table;left:0;'>" + 
            "<p style='display:table-cell;font-size:1.4em;font-weight:bold;'>" +
            String(counter2) + "</p></div>" 
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

            return "<p style='font-size:1.5em;font-weight:bold;'>" +
            "Break 3 of 3.</p>" +
            "<div style='position:absolute;top:620px;width:100%;display:table;left:0;'>" + 
            "<p style='display:table-cell;font-size:1.4em;font-weight:bold;'>" +
            String(counter2) + "</p></div>" 
            },
		choices: jsPsych.NO_KEYS,
		trial_duration: 100, //1000
		on_finish: function(){
		
		}
	};

    var end_break = { 
	    type: "html-keyboard-response",
		stimulus:  "<p style='font-size:1.5em;font-weight:bold;'>" +
            "End of break.</p>" +
            "<div style='position:absolute;top:620px;width:100%;display:table;left:0;'><p style='display:table-cell;font-size:1.4em;font-weight:bold;'>"+
            "Press any key to continue the experiment.</p></div>",
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

    var deliberation = {
		type: "html-keyboard-response",
		stimulus: function(){ 

            setDecoyOptions(decoyIt, fillerIt, stimuliIt);
            
            phantom_banner = getPhantomBanner(decoy_sequence[decoyIt], option_A, option_B, option_C)

            var phantom_banner_A = phantom_banner[0];
            var phantom_banner_B = phantom_banner[1];
            var phantom_banner_C = phantom_banner[2];

            //phantom_banner_A = phantom_banner[0];
            //phantom_banner_B = phantom_banner[1];
            //phantom_banner_C = phantom_banner[2];            
            
            return "<div style='position:absolute;top:6%;height:90%;width:100%;display:table;left:0;'>" +
            "<div style='position:absolute;top:4%;width:50%;display:table;left:27%;'>" +
            "<p style='display:table-cell;color:#002AA5;font-size:3vw;font-weight:bold;line-height:1.5'>" +
            "" + current_good.item + "</p></div>" +

            "<div style='position:absolute;top:34%;width:15%;height:20%;display:table;left:5%;'>" +
            "<p style='position:absolute;font-size:2vw;font-weight:bold;line-height:1.4;text-align:left'>" +
            current_good.dimension_1 + ":</p></div>" +
            "<div style='position:absolute;top:61%;width:15%;height:20%;display:table;left:5%;'>" +
            "<p style='position:absolute;font-size:2vw;font-weight:bold;line-height:1.4;text-align:left'>" +
            current_good.dimension_2 + ":</p></div>" + 

            "<div style='position:absolute;top:16%;width:15%;height:66%;display:table;left:26%;border: 3px solid black;border-radius: 25px;'>" +
            phantom_banner_A + 
            "<p style='position:absolute;top:5px;right:22%;font-size:2vw;font-weight:bold;line-height:1.4'>" + "Option 1" + 
            "<br><br><br>" + option_A.dimension_1 + 
            "<br><br><br><br><br>" + option_A.dimension_2 + "</p></div>" +

            "<div style='position:absolute;top:16%;width:15%;height:66%;display:table;left:51.5%;border: 3px solid black;border-radius: 25px;'>"+
            phantom_banner_B + 
            "<p style='position:absolute;top:5px;right:22%;font-size:2vw;font-weight:bold;line-height:1.4'>" + "Option 2" + 
            "<br><br><br>" + option_B.dimension_1 + 
            "<br><br><br><br><br>" + option_B.dimension_2 + "</p></div>" +

            "<div style='position:absolute;top:16%;width:15%;height:66%;display:table;left:76%;border: 3px solid black;border-radius: 25px;'>"+
            phantom_banner_C + 
            "<p style='position:absolute;top:5px;right:22%;font-size:2vw;font-weight:bold;line-height:1.4'>" + "Option 3" + 
            "<br><br><br>" + option_C.dimension_1 + 
            "<br><br><br><br><br>" + option_C.dimension_2 + "</p></div>" +
            "</div>" +
            "<div style='position:absolute;bottom:9%;width:50%;display:table;left:27%;'><p style='display:table-cell;font-size:2.4vw;font-weight:bold;color:#DC143C'>" +
            "Wait" + "</p></div>" 
		},
		choices: jsPsych.NO_KEYS,
		trial_duration: 100, //10000,
		on_finish: function(data){

            // Get choice banner.
            choices_banner = getChoiceBanner(decoy_sequence[decoyIt], option_A, option_B, option_C);
            
            //data.task = 1; 
            data.Stage = 2;
            data.decoy = decoy_sequence[decoyIt];
            data.item = current_good.item;
            data.option_1 =  option_A.position;
            data.option_2 =  option_B.position;
            data.option_3 =  option_C.position;
            data.Caught = "NaN";
            data.choice = "NaN";
            //data.Deliberation_time = data.rt; 
		},
    };

    var choice = {
        type: "html-keyboard-response",
		stimulus: function() {

            phantom_banner = getPhantomBanner(decoy_sequence[decoyIt], option_A, option_B, option_C);

            var phantom_banner_A = phantom_banner[0];
            var phantom_banner_B = phantom_banner[1];
            var phantom_banner_C = phantom_banner[2];

            return "<div style='position:absolute;top:6%;height:90%;width:100%;display:table;left:0;'>" +
            "<div style='position:absolute;top:4%;width:50%;display:table;left:27%;'>" +
            "<p style='display:table-cell;color:#002AA5;font-size:3vw;font-weight:bold;line-height:1.5'>" +
            "" + current_good.item + "</p></div>" +

            "<div style='position:absolute;top:34%;width:15%;height:20%;display:table;left:5%;'>" +
            "<p style='position:absolute;font-size:2vw;font-weight:bold;line-height:1.4;text-align:left'>" +
            current_good.dimension_1 + ":</p></div>" +
            "<div style='position:absolute;top:61%;width:15%;height:20%;display:table;left:5%;'>" +
            "<p style='position:absolute;font-size:2vw;font-weight:bold;line-height:1.4;text-align:left'>" +
            current_good.dimension_2 + ":</p></div>" + 

            "<div style='position:absolute;top:16%;width:15%;height:66%;display:table;left:26%;border: 3px solid black;border-radius: 25px;'>" +
            phantom_banner_A + 
            "<p style='position:absolute;top:5px;right:22%;font-size:2vw;font-weight:bold;line-height:1.4'>" + "Option 1" + 
            "<br><br><br>" + option_A.dimension_1 + 
            "<br><br><br><br><br>" + option_A.dimension_2 + "</p></div>" +

            "<div style='position:absolute;top:16%;width:15%;height:66%;display:table;left:51.5%;border: 3px solid black;border-radius: 25px;'>"+
            phantom_banner_B + 
            "<p style='position:absolute;top:5px;right:22%;font-size:2vw;font-weight:bold;line-height:1.4'>" + "Option 2" + 
            "<br><br><br>" + option_B.dimension_1 + 
            "<br><br><br><br><br>" + option_B.dimension_2 + "</p></div>" +

            "<div style='position:absolute;top:16%;width:15%;height:66%;display:table;left:76%;border: 3px solid black;border-radius: 25px;'>"+
            phantom_banner_C + 
            "<p style='position:absolute;top:5px;right:22%;font-size:2vw;font-weight:bold;line-height:1.4'>" + "Option 3" + 
            "<br><br><br>" + option_C.dimension_1 + 
            "<br><br><br><br><br>" + option_C.dimension_2 + "</p></div>" +
            "</div>" + choices_banner},
		    choices: function () {

                choices_keys = getPhantomChoiceKeys(decoy_sequence[decoyIt], option_A, option_B, option_C);
                var choosing = [];
                for (let x=0; x < choices_keys.length; x++) {
                    choosing.push(choices_keys[x]);
                }
                return choosing
            },
            trial_duration: 100,
		    on_finish: function(data){

                data.task = 1; 
                data.Stage = "Choice";
                data.decoy = decoy_sequence[decoyIt];
                data.item = current_good.item;
                data.option_1 =  option_A.position;
                data.option_2 =  option_B.position;
                data.option_3 =  option_C.position;

                // Add chosen option to data-> [49, 50, 51] -> turn into function.
                var last_choice = jsPsych.data.get().last(1).values()[0].key_press; 
                if(last_choice == 49) {
                    data.choice = option_A.position;
                } else if (last_choice == 50) { 
                    data.choice = option_B.position;;
                } else if (last_choice == 51) {
                    data.choice = option_C.position;
                } else {
                    data.choice = "Missed!";
                }
                
                //For "F" trials, check if participants catch(1) or not (0). -> Turn into function.
                // Also move foward in the Decoy/filler and stimuli sequence.
                if(decoy_sequence[decoyIt] == "F") {
                    // Advance through decoy/filler sequence.
                    decoyIt++;
                    fillerIt++;
                    if(data.choice == "C") {
                        data.Caught = 1; 
                    } else {
                        data.Caught = 0;
                    }
                } else {
                    //Advance through decoy/stimuli
                    decoyIt++;
                    stimuliIt++;
                    data.Caught = "NaN";
                }

                console.log("decoyIt: " + String(decoyIt));

                data.Deliberation_time = 10000;
                data.Choice_time = data.rt; 

                // Check if 'Too_Slow'
                (data.rt >= 5000) ? data.Too_Slow = 1 : data.Too_Slow = 0;
                //console.log("Too_Slow: " + String(data.Too_Slow));

            }

    };

    var fixation = {
        type: 'html-keyboard-response',
		stimulus: function(){ 
            
            var last_choice = jsPsych.data.get().last(1).values()[0].key_press ; 
            if(last_choice == 49) {
                last_choice = "1";
            } else if (last_choice == 50) { 
                last_choice = "2";
            } else if (last_choice == 51) {
                last_choice = "3";
            } else {
                last_choice = "+";
            }
            
            return '<h1 style="font-size:2rem;">'+ 
            last_choice +'</h1>' }, 
		choices: jsPsych.NO_KEYS,
		trial_duration: 1000, //normalRand(),
        on_finish: function(data){

		}	
    };

    var too_Slow_Fixation_Practice = {
        type: 'html-keyboard-response',
        stimulus: '<h1 style="font-size:2rem;">Too slow!<br><br>Try again.</h1>',
        choices: jsPsych.NO_KEYS,
		trial_duration: 2000, 
        on_finish: function(data){
            
		}	
    };

    var too_Slow_Fixation = {
        type: 'html-keyboard-response',
        stimulus: '<h1 style="font-size:2rem;">Too slow!</h1>',
        choices: jsPsych.NO_KEYS,
		trial_duration: 2000, // + normalRand()
        on_finish: function(data){
            
		}	
    };

    /**Description: catchStimuliNums
     * 
     */
    var catchStimuliNums = {
		type: "html-keyboard-response",
		stimulus: function(){return "<h3>Press the answer to " + catchNum1 + " + " + catchNum2 + " if you are paying attention.</h3>" + "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 + style='display:table-cell;'>"},
		choices: [49, 50, 51, 52, 53, 54, 55, 56, 57],
		on_finish: function(data){
			data.task = 1;
            data.Stage = "Choice";
            data.decoy = "CatchNums";
			data.choice = data.key_press - 48;
			data.Caught = (catchNum1 + catchNum2) === data.key_press - 48;    
			data.resp_t = Math.min(5.0 * 1000, data.rt);
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
            
            //var item_cat = {item: "Category", dimension_1: "D1", dimension_2: "D2"};
            //var item_cat = {item: "Security camera", dimension_1: "Field of view (degrees)", dimension_2: "Battery duration (months)"};
            var item_cat = {item: "Pesticide", dimension_1: "Coverage (s.f.)", dimension_2: "Protection (months)"};
            
            var phantom_banner_A = "";
            var phantom_banner_B = "";
            var phantom_banner_C = "";
            //Check if decoy corresponds to phantom. 
            // Usin a (-1) because in 'presentation' added 1 to advance through trials. 
            
            var decoyType = "P";
            var optionA = {position: "B", dimension_1: "10", dimension_2: "20"};
            var optionB = {position: "A", dimension_1: "10", dimension_2: "20"};
            var optionC = {position: "P_A", dimension_1: "10", dimension_2: "20"};
            
            phantom_banner = getPhantomBanner(decoyType, optionA, optionB, optionC)

            //console.log(phantom_banner);

            phantom_banner_A = phantom_banner[0];
            phantom_banner_B = phantom_banner[1];
            phantom_banner_C = phantom_banner[2];
            
            // Identify phantom (option1, 2, or 3).
            
            return "<div style='position:absolute;top:6%;height:90%;width:100%;display:table;left:0;'>" +
                "<div style='position:absolute;top:4%;width:50%;display:table;left:27%;'>" +
                "<p style='display:table-cell;color:#002AA5;font-size:3vw;font-weight:bold;line-height:1.5'>" +
			    "" + item_cat.item + "</p></div>" +

                "<div style='position:absolute;top:34%;width:15%;height:20%;display:table;left:5%;border: 3px solid black'>" +
                "<p style='position:absolute;font-size:2vw;font-weight:bold;line-height:1.4;text-align:left'>" +
                item_cat.dimension_1 + ":</p></div>" +
                "<div style='position:absolute;top:61%;width:15%;height:20%;display:table;left:5%;border: 3px solid black'>" +
                "<p style='position:absolute;font-size:2vw;font-weight:bold;line-height:1.4;text-align:left'>" +
                item_cat.dimension_2 + ":</p></div>" + 

                "<div style='position:absolute;top:16%;width:15%;height:66%;display:table;left:26%;border: 3px solid black;border-radius: 25px;'>" +
                phantom_banner_A + 
                "<p style='position:absolute;top:5px;right:22%;font-size:2vw;font-weight:bold;line-height:1.4'>" + "Option 1" + 
                "<br><br><br>" + optionA.dimension_1 + 
                "<br><br><br><br><br>" + optionA.dimension_2 + "</p></div>" +

                "<div style='position:absolute;top:16%;width:15%;height:66%;display:table;left:51.5%;border: 3px solid black;border-radius: 25px;'>"+
                phantom_banner_B + 
                "<p style='position:absolute;top:5px;right:22%;font-size:2vw;font-weight:bold;line-height:1.4'>" + "Option 2" + 
                "<br><br><br>" + optionB.dimension_1 + 
                "<br><br><br><br><br>" + optionB.dimension_2 + "</p></div>" +

                "<div style='position:absolute;top:16%;width:15%;height:66%;display:table;left:76%;border: 3px solid black;border-radius: 25px;'>"+
                phantom_banner_C + 
                "<p style='position:absolute;top:5px;right:22%;font-size:2vw;font-weight:bold;line-height:1.4'>" + "Option 3" + 
                "<br><br><br>" + optionC.dimension_1 + 
                "<br><br><br><br><br>" + optionC.dimension_2 + "</p></div>" +
                "</div>" +
                "<div style='position:absolute;bottom:9%;width:50%;display:table;left:27%;'><p style='display:table-cell;font-size:2.4vw;font-weight:bold;color:#DC143C'>" +
			    "Wait" + "</p></div>" 
		},
		choices: jsPsych.NO_KEYS,
		//trial_duration: 20000,
		on_finish: function(data){
		},
    };

    var practice_deliberation = {
		type: "html-keyboard-response",
		stimulus:  function() {
        
            var current_options = getPracticeOptions(practice_sequence[practiceIt]);
            
            current_good.item = practice_stim_names[practice_sequence[practiceIt]][0];
            current_good.dimension_1 = practice_stim_names[practice_sequence[practiceIt]][1];
            current_good.dimension_2 = practice_stim_names[practice_sequence[practiceIt]][2];

            option_A.position = current_options[0][0]; 
            option_A.dimension_1 = current_options[0][1];
            option_A.dimension_2 = current_options[0][2];

            option_B.position = current_options[1][0];
            option_B.dimension_1 = current_options[1][1];
            option_B.dimension_2 = current_options[1][2];

            option_C.position = current_options[2][0];
            option_C.dimension_1 = current_options[2][1];
            option_C.dimension_2 = current_options[2][2];

            return "<div style='position:absolute;top:6%;width:100%;display:table;left:0;'>" +
                "<div style='position:absolute;top:6%;width:50%;display:table;left:27%;'>" +
                "<p style='display:table-cell;color:#002AA5;font-size:2em;font-weight:bold;line-height:1.5'>" +
			    "" + current_good.item + "</p></div>" +

                "<div style='position:absolute;top:210px;width:240px;height:130px;display:table;left:5%;'>" +
                "<p style='position:absolute;font-size:1.5em;font-weight:bold;line-height:1.4;text-align:left'>" +
                current_good.dimension_1 + ":</p></div>" +
                "<div style='position:absolute;top:385px;width:240px;height:130px;display:table;left:5%;'>" +
                "<p style='position:absolute;font-size:1.5em;font-weight:bold;line-height:1.4;text-align:left'>" +
                current_good.dimension_2 + ":</p></div>" + 

                "<div style='position:absolute;top:100px;width:200px;height:420px;display:table;left:26%;border: 3px solid black;border-radius: 25px;'>"+
                "<p style='position:absolute;top:5px;right:47.5px;font-size:1.5em;font-weight:bold;line-height:1.4'>" + "Option 1" + 
                "<br><br><br>" + option_A.dimension_1 + 
                "<br><br><br><br><br>" + option_A.dimension_2 + "</p></div>" +

                "<div style='position:absolute;top:100px;width:200px;height:420px;display:table;left:51.5%;border: 3px solid black;border-radius: 25px;'>"+
                "<p style='position:absolute;top:5px;right:47.5px;font-size:1.5em;font-weight:bold;line-height:1.4'>" + "Option 2" + 
                "<br><br><br>" + option_B.dimension_1 + 
                "<br><br><br><br><br>" + option_B.dimension_2 + "</p></div>" +

                "<div style='position:absolute;top:100px;width:200px;height:420px;display:table;left:76%;border: 3px solid black;border-radius: 25px;'>"+
                "<p style='position:absolute;top:5px;right:47.5px;font-size:1.5em;font-weight:bold;line-height:1.4'>" + "Option 3" + 
                "<br><br><br>" + option_C.dimension_1 + 
                "<br><br><br><br><br>" + option_C.dimension_2 + "</p></div>" +
                "</div>" +
                "<div style='position:absolute;bottom:9%;width:50%;display:table;left:27%;'><p style='display:table-cell;font-size:1.7em;font-weight:bold;color:#DC143C'>" +
			    "Wait" + "</p></div>" 

        },
		choices: jsPsych.NO_KEYS,
		trial_duration: 8000, //change back to -> 8000; for final version,
		on_finish: function(data){
            //jsPsych.pauseExperiment();
			//jsPsych.addNodeToEndOfTimeline(practice_choice, jsPsych.resumeExperiment); 
		},
    };

    var practice_choice = {
		type: "html-keyboard-response",
		stimulus: function(){

            return "<div style='position:absolute;top:6%;width:100%;display:table;left:0;'>" +
            "<div style='position:absolute;top:6%;width:50%;display:table;left:27%;'>" +
            "<p style='display:table-cell;color:#002AA5;font-size:2em;font-weight:bold;line-height:1.5'>" +
            "" + current_good.item + "</p></div>" +

            "<div style='position:absolute;top:210px;width:240px;height:130px;display:table;left:5%;'>" +
            "<p style='position:absolute;font-size:1.5em;font-weight:bold;line-height:1.4;text-align:left'>" +
            current_good.dimension_1 + ":</p></div>" +
            "<div style='position:absolute;top:385px;width:240px;height:130px;display:table;left:5%;'>" +
            "<p style='position:absolute;font-size:1.5em;font-weight:bold;line-height:1.4;text-align:left'>" +
            current_good.dimension_2 + ":</p></div>" + 

            "<div style='position:absolute;top:100px;width:200px;height:420px;display:table;left:26%;border: 3px solid black;border-radius: 25px;'>"+
            "<p style='position:absolute;top:5px;right:47.5px;font-size:1.5em;font-weight:bold;line-height:1.4'>" + "Option 1" + 
            "<br><br><br>" + option_A.dimension_1 + 
            "<br><br><br><br><br>" + option_A.dimension_2 + "</p></div>" +

            "<div style='position:absolute;top:100px;width:200px;height:420px;display:table;left:51.5%;border: 3px solid black;border-radius: 25px;'>"+
            "<p style='position:absolute;top:5px;right:47.5px;font-size:1.5em;font-weight:bold;line-height:1.4'>" + "Option 2" + 
            "<br><br><br>" + option_B.dimension_1 + 
            "<br><br><br><br><br>" + option_B.dimension_2 + "</p></div>" +

            "<div style='position:absolute;top:100px;width:200px;height:420px;display:table;left:76%;border: 3px solid black;border-radius: 25px;'>"+
            "<p style='position:absolute;top:5px;right:47.5px;font-size:1.5em;font-weight:bold;line-height:1.4'>" + "Option 3" + 
            "<br><br><br>" + option_C.dimension_1 + 
            "<br><br><br><br><br>" + option_C.dimension_2 + "</p></div>" +
            "</div>" +
            "<div style='position:absolute;bottom:9%;width:50%;display:table;left:27%;'><p style='display:table-cell;font-size:1.7em;font-weight:bold;color:#478778'>" +
			"Press '1', '2', or '3'" + "</p></div>" 
		},
		choices: [49, 50, 51], //a=65, b=66, c=67,
		//trial_duration: 2000,
		on_finish: function(data){

            practiceIt++;
            data.Stage = "Choice";
            practice_rt = data.rt;
            (data.rt >= 5000) ? data.Too_Slow = 1 : data.Too_Slow = 0;
            //jsPsych.pauseExperiment();
			//jsPsych.addNodeToEndOfTimeline(practice_fixation, jsPsych.resumeExperiment); 

		},
    };


    var practice_fixation = {
		type: 'html-keyboard-response',
		stimulus: function(){ 
            
            var last_choice = jsPsych.data.get().last(1).values()[0].key_press; 
            if(last_choice == 49) {
                last_choice = "1";
            } else if (last_choice == 50) { 
                last_choice = "2";
            } else {
                last_choice = "3";
            } 
            
            return '<h1 style="font-size:2rem;">'+ 
            last_choice +'</h1>' }, 
		choices: jsPsych.NO_KEYS,
		trial_duration: normalRand(),
        on_finish: function(data){
            //jsPsych.pauseExperiment();
			//jsPsych.addNodeToEndOfTimeline(countdown_one_start(), jsPsych.resumeExperiment); 
		}	
	};


    /*
    If's variables.
    */
    
    var ifPracticeStimuli = {
        timeline: [practice_deliberation, practice_choice], 
        conditional_function: function(){
             
            if(1 === 1){
                return true;
            } else {
                return false;
            }    
        }
    }

    var ifMainStimuli = {
        timeline: [deliberation, choice], 
        conditional_function: function(){
            
            if(1 === 1){
                return true;
            } else {
                return false;
            }
            
        }
    };

    var ifFixation = {
        timeline: [fixation], 
        conditional_function: function() {

            var last_trial_rt = jsPsych.data.get().last(1).values()[0].rt;

            if(last_trial_rt != null) {
                return true; 
            } else {
                return false; 
            }

        }
    };

    var ifTooSlowPractice = {
        timeline: [too_Slow_Fixation_Practice], 
        conditional_function: function() {
            if(jsPsych.data.get().filter({Stage: "Choice"}).last(1).values()[0].Too_Slow === 1) {
                return true; 
            } else {
                return false; 
            }

        }
    };

    var ifTooSlow = {
        timeline: [too_Slow_Fixation], 
        conditional_function: function() {

            //console.log("Too_slow: " + String(jsPsych.data.get().filter({Stage: "Choice"}).last(1).values()[0].Too_Slow));
            if(jsPsych.data.get().filter({Stage: "Choice"}).last(1).values()[0].Too_Slow === 1) {
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

   var practiceLoop = {
        timeline: [ifPracticeStimuli, ifFixation, ifTooSlowPractice], 
        loop_function: function() {
        
        // In the case a participants goes through 5 unsuccessful practice trials
        // this line of code will reset the practice_sequence.
        if(practiceIt >= 4) {
            practiceIt = 0;
            }

        if(practice_rt >= 2000) {
            return true;
        } else {
            jsPsych.pauseExperiment();
            jsPsych.addNodeToEndOfTimeline(countdown_one_start(), jsPsych.resumeExperiment); 
            return false;
        }

        }
    };

    var mainLoop1 = {
        timeline: [ifMainStimuli, ifFixation], //, ifTooSlow, ifCatch_Nums 
        loop_function: function(){
            mainIt++; 
            catchCounterNums++;
            catchCounterDecoys++;
            if (mainIt < 6){ 

                return true;

            } else {
                jsPsych.pauseExperiment();
				jsPsych.addNodeToEndOfTimeline(counter_loop_break_1, jsPsych.resumeExperiment);
                return false;
                }
        }
            
    };

    var mainLoop2 = {
        timeline: [ifMainStimuli, ifFixation], //, ifTooSlow, ifCatch_Nums 
        loop_function: function(){
            mainIt++; 
            catchCounterNums++;
            catchCounterDecoys++;
            if (mainIt < 11){ 

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

    var mainLoop3 = {
        timeline: [ifMainStimuli, ifCatch_Nums], 
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
        timeline: [ifMainStimuli, ifCatch_Nums], 
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

    //current_good.dimension_1 = "Size of hard drive (Gb)"; 
    //current_good.dimension_2 = "Speed (gHz)";

    //option_A.dimension_1 = 830; 
    //option_B.dimension_1 = 1150;
    //option_C.dimension_1 = 830;

    //option_A.dimension_2 = 3.0; 
    //option_B.dimension_2 = 2.5;
    //option_C.dimension_2 = 3.2;

    //jsPsych.addNodeToEndOfTimeline(phantom_tester, jsPsych.resumeExperiment);
    
    jsPsych.addNodeToEndOfTimeline(InstructionScreen(), jsPsych.resumeExperiment);

}