function Decoy(timeline) {

    var timeline = [];

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
   [[9, 9, 9], [9, 9, 9]]
   ];
   
   var mainIt = 0;
   
   // Might be useful later.
   //var sequence = jsPsych.randomization.shuffle(Array.from(Array(10).keys()));

   var decoyIt = 0; 
   var stimuliIt = 0;
   var fillerIt = 0; 
   
   var countdown_A = 0;
   var counter1 = 0;  
    

   var counter_break_1 = 300;
   var counter2 = 0;

   /**
    * Choice-set holders.
    */

   var current_good = {}
   var option_A = {}
   var option_B = {}
   var option_C = {}   

    //Catch system //
    var catchCounter = 0;
    var catchNum1 = 0;
    var catchNum2 = 0;
    for (var catchIndices = [], i = 0 ; i<2000; i++) {
         Math.random() < .05 ? catchIndices[i] = 1 : catchIndices[i]=0;
    }
     
    function getCatchNums() {
           catchNum1 = Math.floor(Math.random() * 9); // 0 to 8
           catchNum2 = Math.floor(Math.random() * (9 - catchNum1)) + 1; // complement of catchNum1
    }
    //

    // Generate Choice-set// 

    /**
     * 100 total trials & 4 blocks
     * 25 trials per block (20 product, 5 filler)
     * 
     */

    var target_monitoring = {}

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

    var stimuli_sequence = getStimuliSequence()
    var decoy_sequence = getDecoySequence()
    console.log("Decoy_sequence: " + decoy_sequence);
    //console.log("Decoy_sequence0: " + decoy_sequence[0]);

    //getOptions(current_stimulus, current_target, current_decoy);
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


    function getPhantomBanner(decoy, optionA, optionB, optionC) {

        var banners = ["", "", ""];

        console.log(decoy); 
        console.log(typeof(optionA));
        console.log(optionA);
        console.log(typeof(optionB));
        console.log(optionB);
        console.log(typeof(optionC));
        console.log(optionC);
        console.log(phantom_ints);

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

    function getTime(counter_time) {

        // 
        var time_array = (counter_time).toString(10).split("").map(function(t){return parseInt(t)})

        var min = Math.floor(counter_time / 60);
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

    }
    //
   
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
					jsPsych.addNodeToEndOfTimeline(counter_loop_break_1, jsPsych.resumeExperiment);
                    //jsPsych.addNodeToEndOfTimeline(phantom_tester, jsPsych.resumeExperiment);
			}
    }};

    var countdown_one_start = function(){ 
        
        return {
		type: "html-keyboard-response",
		stimulus: "<h3><p></p>" +
				"<p>Are you ready?</p></h3>" +
				"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
				"Press any key to continue</h3></div>",
		on_finish: function(){
				jsPsych.pauseExperiment();
				jsPsych.addNodeToEndOfTimeline(counter_loop_start, jsPsych.resumeExperiment);		
		}
	};};

    var countdown_one = { 
	    type: "html-keyboard-response",
		stimulus: function(){

            counter1 = 10 - countdown_A;

            return "<h3><p></p>" +
            "<p>Are you ready?</p></h3>" +
            "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
            String(counter1) + "</h3></div>" 
            },
		choices: jsPsych.NO_KEYS,
		trial_duration: 1000,
		on_finish: function(){
				jsPsych.pauseExperiment();
				jsPsych.addNodeToEndOfTimeline(mainLoop, jsPsych.resumeExperiment);		
		}
	};

    var countdown_two = { 
	    type: "html-keyboard-response",
		stimulus: function(){

            counter2 = getTime(counter_break_1);
            //10 - counter_break_1;

            return "<h3><p></p>" +
            "<p>Are you ready?</p></h3>" +
            "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
            String(counter2) + "</h3></div>" 
            },
		choices: jsPsych.NO_KEYS,
		trial_duration: 1000,
		on_finish: function(){
				jsPsych.pauseExperiment();
				jsPsych.addNodeToEndOfTimeline(mainLoop, jsPsych.resumeExperiment);		
		}
	};

    /* 
    Events within a trial/experiment.
    */

    var presentation = {
		type: "html-keyboard-response",
		stimulus: function(){ 
            
            if(decoy_sequence[decoyIt] == "F") {

                // Update item category according to sequence
                current_good.item = demo_fillers_names[fillerIt][0];
                current_good.dimension_1 = demo_fillers_names[fillerIt][1];
                current_good.dimension_2 = demo_fillers_names[fillerIt][2];

                // Update A, B, C
                option_A.dimension_1 = demo_fillers_cs[decoyIt][0][0];
                option_A.dimension_2 = demo_fillers_cs[decoyIt][1][0];

                option_B.dimension_1 = demo_fillers_cs[decoyIt][0][1];
                option_B.dimension_2 = demo_fillers_cs[decoyIt][1][1];

                option_C.dimension_1 = demo_fillers_cs[decoyIt][0][2];
                option_C.dimension_2 = demo_fillers_cs[decoyIt][1][2];

                // Advance through decoy sequence
                decoyIt++;
                fillerIt++;

            } else {

                // Update item category according to sequence
                current_good.item = demo_cs_names1[stimuli_sequence[stimuliIt]][0];
                current_good.dimension_1 = demo_cs_names1[stimuli_sequence[stimuliIt]][1];
                current_good.dimension_2 = demo_cs_names1[stimuli_sequence[stimuliIt]][2];

                var current_decoy = decoy_sequence[decoyIt];
                //console.log("Decoy: " + current_decoy);
                var current_stimulus = stimuli_sequence[stimuliIt];
                //console.log("Stimulus: " + current_stimulus);

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
                console.log("A position: " + String(option_A.position));
                option_A.dimension_1 = current_options[0][1];
                option_A.dimension_2 = current_options[0][2];

                option_B.position = current_options[1][0];
                console.log("B position: " + String(option_B.position));
                option_B.dimension_1 = current_options[1][1];
                option_B.dimension_2 = current_options[1][2];

                option_C.position = current_options[2][0];
                console.log("C position: " + String(option_C.position));
                option_C.dimension_1 = current_options[2][1];
                option_C.dimension_2 = current_options[2][2];

                // Advance through stimuli and decoy sequence
                decoyIt++;
                stimuliIt++;
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
		trial_duration: 3000,
		on_finish: function(data){
		},
    };

    var deliberation = {
		type: "html-keyboard-response",
		stimulus: function(){ 
            var phantom_banner_A = "";
            var phantom_banner_B = "";
            var phantom_banner_C = "";
            //Check if decoy corresponds to phantom. 
            // Usin a (-1) because in 'presentation' added 1 to advance through trials. 

            //console.log("decoy: " + String(decoy_sequence[decoyIt-1]));
            //console.log("position A: " + String(option_A.position));
            //console.log("position B: " + String(option_B.position));
            //console.log("position C: " + String(option_C.position));
            
            phantom_banner = getPhantomBanner(decoy_sequence[decoyIt-1], option_A, option_B, option_C)

            //console.log(phantom_banner);

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
		trial_duration: 8000,
		on_finish: function(data){
		},
    };

    var choice = {
		type: "html-keyboard-response",
		stimulus: function(){
            return "<div style='position:absolute;top:6%;width:100%;display:table;left:0;'>"+
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
            "</div>" +
            "<div style='position:absolute;bottom:10%;width:50%;display:table;left:27%;'><h3 style='display:table-cell;'>"+
			    "Press 'A', 'B', or 'C'" + "</h3></div>" 
		},
		choices: jsPsych.NO_KEYS,
		trial_duration: 2000,
		on_finish: function(data){
		},
    };


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


    /*
    If's variables.
    */

    var ifMainStimuli = {
        timeline: [presentation, deliberation, choice], //, deliberation, choice
        conditional_function: function(){
            
            if(1 === 1){
                return true;
            } else {
                return false;
            }

            // Check if we need catch trials
            /*
            if(catchIndices[catchCounter] !== 1) {
                    return true;
              } else {
                    getCatchNums();
                    return false;
              }
            */
            
        }
    }

    /*
    var ifFixation = {
        timeline: [fixation, blankPage],
        conditional_function: function(){
              var data = jsPsych.data.get().last(1).values()[0];
              var needed_fix = needsFixation;
              needsFixation = true;
              if(needed_fix){
                    pracStreak = pracStreak + 1; 
                    return true;
              } else {
                    return false;
              }
        }
    }

    var ifCatch = {
        timeline: [catchStimuli], 
        conditional_function: function(){
              if (catchIndices[catchCounter] === 1){
                    mainIt--;
                    needsFixation = true; 
                    getCatchNums();
                    return true;
              } else {
                    return false;
              }
        }
    }
    */


    /*
    mainLoop: controls length and events within a trial.
    */

    var mainLoop = {
        timeline: [ifMainStimuli], //, ifCatch, ifFixation
        loop_function: function(){
        mainIt++; 
        //catchCounter++;
        if (mainIt < 100){ // Number of choices.
            return true;
        } else {
            //jsPsych.pauseExperiment();
            //collectData();  //Define.
            //jsPsych.addNodeToEndOfTimeline(determine_ending(), jsPsych.resumeExperiment);
            return false;
            }
        }
            
    };

    var counter_loop_start = {
        timeline: [countdown_one], 
        loop_function: function(){
            if(countdown_A < 10) {
                console.log("countdown_loop_one: " + String(countdown_A));
                countdown_A++;
                return true;
            } else {
                return false;
            }
        }
    }

    var counter_loop_break_1 = {
        timeline: [countdown_two], 
        loop_function: function(){
            if(counter_break_1 == 0) {
                console.log("counter_loop_break_1: " + String(300 - counter_break_1));
                counter_break_1--;
                return true;
            } else {
                return false;
            }
        }
    }

    //timeline.push(presentation);
    
    jsPsych.addNodeToEndOfTimeline(InstructionScreen(), jsPsych.resumeExperiment);
    //jsPsych.addNodeToEndOfTimeline(counter1Loop, jsPsych.resumeExperiment);

    //jsPsych.addNodeToEndOfTimeline(presentation, jsPsych.resumeExperiment);

}