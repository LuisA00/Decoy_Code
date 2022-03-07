#!/usr/bin/env python
print "Content-Type: text/html"     # HTML is following
print
import cgi, cgitb, re, json
cgitb.enable()

input_data = cgi.FieldStorage()

def isFormatValid(data):
   return False
   #if(data != "00000000"):
   #   return True
   #else: 
   #   return False

def ValOrNaN(dic, key):
   try:
       return str(dic[key]).replace(',', '')
   except: # KeyError
       return 'NaN'

def JsonToCSV(jsn):
   csvTrialKeys = ['Decoy', 'Item', 'Option_1', 'Option_2', 'Option_3', 'Choice', 'CatchTrials', 'Deliberation_RT', 'Choice_RT', 'Too_Slow']
   csv = ['','']
   for key, value in json.loads(jsn)['Trials'][0].items():
       csv[0] = csv[0] + key + ','
       value = str(value)
       csv[1] = csv[1] + value.replace(',', '') + ','
   csv.append('')
   csv.append(','.join(csvTrialKeys))
   for trial in json.loads(jsn)['Trials'][1:]:
       csv.append(','.join([ValOrNaN(trial, key) for key in csvTrialKeys]))
   return '\n'.join(csv)

# Check if 'csv' file 
if(False):
   print( '<head><title>ERROR</title></head><body style="margin: 0px; height: 100%; width: 100%;" tabindex="0" class="jspsych-display-element">ERROR: {}</body></html>'.format(result) )
else:
    print'<head><title>Thank you</title><link href="jspsych-6.1.0/css/jspsych.css" rel="stylesheet" type="text/css"></link></head><body style="margin: 0px; height: 100%; width: 100%;" tabindex="0" class="jspsych-display-element"><div style="display:table;width:100%;height:100%;"><div style="display:table-cell;vertical-align:middle;text-align:center;"><h3>Thank you! <br>Your responses are recorded, and you may close the tab or window.</h3></div></div></body></html>'
    json_file = open("/home/websites/yulabexp-face/22AY01/Data/" + input_data["userid"].value + ".txt",'w')
    json_file.write(input_data["Responses"].value)
    json_file.close()
    csv_file = open("/home/websites/yulabexp-face/22AY01/Data/" + input_data["userid"].value + ".csv",'w')
    csv_file.write(JsonToCSV(input_data["Responses"].value))
    csv_file.close()
# print '<head><title>Thank you</title><link href="jspsych-6.1.0/css/jspsych.css" rel="stylesheet" type="text/css"></link></head><body style="margin: 0px; height: 100%; width: 100%;" tabindex="0" class="jspsych-display-element"><div style="display:table;width:100%;height:100%;"><div style="display:table-cell;vertical-align:middle;text-align:center;"><h3>Thank you! <br>Your responses are recorded; <a href="https://ucsd.sona-systems.com/webstudy_credit.aspx?experiment_id=1892&credit_token=0d7b3f227db24994abba62fbe5bfc4f9&survey_code=' + input_data["sc"].value +'">please click on this link to receive your credit.</a></h3></div></div></body></html>'  
# Change link
# What is input_data["sc"].value ? id=2276