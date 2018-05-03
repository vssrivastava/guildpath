export const surveyJSON = {
  pages: [{
    name: "CONS",
    elements: [{
      type: "checkbox",
      name: "question45",
      title: "Before you begin the survey, please ensure the patient has agreed to participate in the survey and the consent form has been signed by them.",
      isRequired: true,
      choices: [{
        value: "item1",
        text: "Patient has signed on the consent form"
      }]
    }],
    title: "Patient Consent"
  }, {
    name: "AQOL1",
    elements: [{
      type: "matrix",
      name: "AQOL1",
      title: "Please answer the below questions about Asthma Quality of Life.",
      isRequired: true,
      columns: [{
        value: "0",
        text: "Not at all"
      }, {
        value: "1",
        text: "Mildly"
      }, {
        value: "2",
        text: "Moderately"
      }, {
        value: "3",
        text: "Severly"
      }, {
        value: "4",
        text: "Very Severely"
      }],
      rows: [{
        value: "OP1",
        text: "I have been troubled by episodes of shortness  of breath"
      }, {
        value: "OP2",
        text: "I have been troubled by wheezing attacks"
      }, {
        value: "OP3",
        text: "I have been troubled by tightness in the chest"
      }, {
        value: "OP4",
        text: "I have been restricted in walking down the street on  level ground or doing light housework because of  asthma"
      }, {
        value: "OP5",
        text: "I have been restricted in walking up hills or doing  heavy housework because of asthma"
      }]
    }],
    title: "Asthma Quality of Life (Page 1)"
  }, {
    name: "AQOL2",
    elements: [{
      type: "matrix",
      name: "question1",
      title: "Please answer the below questions about Asthma Quality of Life.",
      columns: [{
        value: "0",
        text: "Not at all"
      }, {
        value: "1",
        text: "Mildly"
      }, {
        value: "2",
        text: "Moderately"
      }, {
        value: "3",
        text: "Severly"
      }, {
        value: "4",
        text: "Very Severely"
      }],
      rows: [{
        value: "OP6",
        text: "I have felt tired or a general lack of energy"
      }, {
        value: "OP7",
        text: "I have been unable to sleep at night"
      }, {
        value: "OP8",
        text: "I have felt sad or depressed"
      }, {
        value: "OP9",
        text: "I have felt frustrated with myself"
      }, {
        value: "OP10",
        text: "I have felt anxious, under tension or stressed"
      }]
    }],
    title: "Asthma Quality of Life (Page 2)"
  }, {
    name: "AQOL3",
    elements: [{
      type: "matrix",
      name: "question2",
      title: "Please answer the below questions about Asthma Quality of Life.",
      columns: [{
        value: "0",
        text: "Not at all"
      }, {
        value: "1",
        text: "Mildly"
      }, {
        value: "2",
        text: "Moderately"
      }, {
        value: "3",
        text: "Severly"
      }, {
        value: "4",
        text: "Very Severely"
      }],
      rows: [{
        value: "OP11",
        text: "I have felt that asthma is preventing me from achieving what I want from life"
      }, {
        value: "OP12",
        text: "Asthma has interfered with my social life"
      }, {
        value: "OP13",
        text: "I have been limited in going to certain places because they are bad for my asthma"
      }, {
        value: "OP14",
        text: "I have been limited in going to certain places  because I have been afraid of getting an asthma  attack and not being able to get help"
      }, {
        value: "OP15",
        text: "I have been restricted in sports, hobbies or other recreations, because of my asthma"
      }]
    }],
    title: "Asthma Quality of Life (Page 3)"
  }, {
    name: "AQOL4",
    elements: [{
      type: "matrix",
      name: "question3",
      title: "Please answer the below questions about Asthma Quality of Life.",
      columns: [{
        value: "0",
        text: "Not at all"
      }, {
        value: "1",
        text: "Mildly"
      }, {
        value: "2",
        text: "Moderately"
      }, {
        value: "3",
        text: "Severly"
      }, {
        value: "4",
        text: "Very Severely"
      }],
      rows: [{
        value: "OP16",
        text: "I have felt generally restricted"
      }, {
        value: "OP17",
        text: "I have felt that asthma is controlling my life"
      }, {
        value: "OP18",
        text: "I have been worried about my present or future health because of asthma"
      }, {
        value: "OP19",
        text: "I have worried about asthma shortening my life"
      }, {
        value: "OP20",
        text: "I have felt dependent on my asthma sprays"
      }]
    }],
    title: "Asthma Quality of Life (Page 4)"
  }, {
    name: "GQOL1",
    elements: [{
      type: "radiogroup",
      name: "question4",
      title: "In general, would you say your health is:",
      choices: [{
        value: "item1",
        text: "Excellent"
      }, {
        value: "item2",
        text: "Very Good"
      }, {
        value: "item3",
        text: "Good"
      }, {
        value: "item4",
        text: "Fair"
      }, {
        value: "item5",
        text: "Poor"
      }]
    }],
    title: "General Quality of Life"
  }, {
    name: "GQOL2",
    elements: [{
      type: "radiogroup",
      name: "question5",
      title: "Are you now limited in moderate activities, such as moving a table, pushing a vacuum cleaner, bowling or playing golf? Does your health now",
      choices: [{
        value: "item1",
        text: "Limit you a lot"
      }, {
        value: "item2",
        text: "Limit you a little"
      }, {
        value: "item3",
        text: "Not limit you at all"
      }]
    }],
    title: "General Quality of Life"
  }, {
    name: "GQOL3",
    elements: [{
      type: "radiogroup",
      name: "question6",
      title: "How about climbing several flights of stairs? Would you say your health now",
      choices: [{
        value: "item1",
        text: "Limit you a lot"
      }, {
        value: "item2",
        text: "Limit you a little"
      }, {
        value: "item3",
        text: "Not limit you at all"
      }]
    }],
    title: "General Quality of Life"
  }, {
    name: "GQOL4",
    elements: [{
      type: "radiogroup",
      name: "question7",
      title: "During the past 4 weeks, how much of the time have you had any of the following problems with your work or regular daily activities as a result of your physical health? How much of the time have you accomplished less than you would like?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "All of the time"
      }, {
        value: "IT2",
        text: "Most of the time"
      }, {
        value: "IT3",
        text: "Some of the time"
      }, {
        value: "IT4",
        text: "A little of the time"
      }, {
        value: "IT5",
        text: "None of the time"
      }]
    }],
    title: "General Quality of Life"
  }, {
    name: "GQOL5",
    elements: [{
      type: "radiogroup",
      name: "question8",
      title: "How much of the time were you limited in the kind of work or other activities you could do?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "All of the time"
      }, {
        value: "IT2",
        text: "Most of the time"
      }, {
        value: "IT3",
        text: "Some of the time"
      }, {
        value: "IT4",
        text: "A little of the time"
      }, {
        value: "IT5",
        text: "None of the time"
      }]
    }],
    title: "General Quality of Life"
  }, {
    name: "GQOL6",
    elements: [{
      type: "radiogroup",
      name: "question9",
      title: "During the past four weeks, how much did pain interfere with your normal work including both outside the home and housework, would you say...?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "Extremely"
      }, {
        value: "IT2",
        text: "Quite a bit "
      }, {
        value: "IT3",
        text: "Moderately"
      }, {
        value: "IT4",
        text: "A little bit"
      }, {
        value: "IT5",
        text: "Not at all"
      }]
    }],
    title: "General Quality of Life"
  }, {
    name: "GQOL7",
    elements: [{
      type: "radiogroup",
      name: "question10",
      title: "How much of the time during the past four weeks did you have a lot of energy? Would you say...?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "All of the time"
      }, {
        value: "IT2",
        text: "Most of the time"
      }, {
        value: "IT3",
        text: "Some of the time"
      }, {
        value: "IT4",
        text: "A little of the time"
      }, {
        value: "IT5",
        text: "None of the time"
      }]
    }],
    title: "General Quality of Life"
  }, {
    name: "GQOL8",
    elements: [{
      type: "radiogroup",
      name: "question11",
      title: "During the past four weeks, how much of the time have you had any of the following problems with your work or other daily activities as a result of any emotional problems, such as feeling depressed or anxious. How much of the time have you accomplished less than you would like? Would you say...?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "All of the time"
      }, {
        value: "IT2",
        text: "Most of the time"
      }, {
        value: "IT3",
        text: "Some of the time"
      }, {
        value: "IT4",
        text: "A little of the time"
      }, {
        value: "IT5",
        text: "None of the time"
      }]
    }],
    title: "General Quality of Life"
  }, {
    name: "GQOL9",
    elements: [{
      type: "radiogroup",
      name: "question12",
      title: "How much of the time did you have trouble doing work or other activities as carefully as usual? Would you say…?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "All of the time"
      }, {
        value: "IT2",
        text: "Most of the time"
      }, {
        value: "IT3",
        text: "Some of the time"
      }, {
        value: "IT4",
        text: "A little of the time"
      }, {
        value: "IT5",
        text: "None of the time"
      }]
    }],
    title: "General Quality of Life"
  }, {
    name: "GQOL10",
    elements: [{
      type: "radiogroup",
      name: "question13",
      title: "How much of the time during the past four weeks have you felt calm and peaceful? Would you say...?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "All of the time"
      }, {
        value: "IT2",
        text: "Most of the time"
      }, {
        value: "IT3",
        text: "Some of the time"
      }, {
        value: "IT4",
        text: "A little of the time"
      }, {
        value: "IT5",
        text: "None of the time"
      }]
    }],
    title: "General Quality of Life"
  }, {
    name: "GQOL11",
    elements: [{
      type: "radiogroup",
      name: "question14",
      title: "How much of the time during the past four weeks have you felt downhearted and blue?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "All of the time"
      }, {
        value: "IT2",
        text: "Most of the time"
      }, {
        value: "IT3",
        text: "Some of the time"
      }, {
        value: "IT4",
        text: "A little of the time"
      }, {
        value: "IT5",
        text: "None of the time"
      }]
    }],
    title: "General Quality of Life"
  }, {
    name: "GQOL12",
    elements: [{
      type: "radiogroup",
      name: "question15",
      title: "During the last four weeks, how much of the time has your physical health or emotional problems interfered with your social activities, like visiting with friends, relatives, etc.?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "All of the time"
      }, {
        value: "IT2",
        text: "Most of the time"
      }, {
        value: "IT3",
        text: "Some of the time"
      }, {
        value: "IT4",
        text: "A little of the time"
      }, {
        value: "IT5",
        text: "None of the time"
      }]
    }],
    title: "General Quality of Life"
  }, {
    name: "DEM",
    elements: [{
      type: "panel",
      name: "Demographics",
      elements: [{
        type: "dropdown",
        name: "question16",
        title: "Age",
        choices: [{
          value: "IT1",
          text: "18-25 years"
        }, {
          value: "IT2",
          text: "25-35 years"
        }, {
          value: "IT3",
          text: "35-45 years"
        }, {
          value: "IT4",
          text: "45-55 years"
        }, {
          value: "IT5",
          text: " Above 55 years"
        }]
      }, {
        type: "dropdown",
        name: "question17",
        title: "Gender",
        choices: [{
          value: "IT1",
          text: "Male"
        }, {
          value: "IT2",
          text: "Female"
        }, {
          value: "IT3",
          text: "Unspecified"
        }]
      }, {
        type: "dropdown",
        name: "question18",
        title: "Occupation",
        choices: ["item1", "item2", "item3"]
      }, {
        type: "dropdown",
        name: "question19",
        title: "Education History",
        choices: ["item1", "item2", "item3"]
      }, {
        type: "dropdown",
        name: "question20",
        title: "State of Residence",
        choices: [{
          value: "IT1",
          text: " ACT"
        }, {
          value: "IT2",
          text: " NSW"
        }, {
          value: "IT3",
          text: " NT"
        }, {
          value: "IT4",
          text: "QLD"
        }, {
          value: "IT5",
          text: " SA"
        }, {
          value: "IT6",
          text: " TAS"
        }, {
          value: "IT7",
          text: " VIC"
        }, {
          value: "IT8",
          text: " WA"
        }]
      }],
      title: "Demographics Details"
    }]
  }, {
    name: "MEDH",
    elements: [{
      type: "radiogroup",
      name: "question21",
      title: "Kindly verify the medication history information at the bottom of this page and add any medication that is missing from the list. Also add the weekly dosage information for each of the drug.  Are you done?",
      choices: [{
        value: "IT1",
        text: "Yes"
      }, {
        value: "IT2",
        text: "No"
      }]
    }],
    title: "Medication History"
  }, {
    name: "AHIST",
    elements: [{
      type: "panel",
      name: "panel1",
      elements: [{
        type: "dropdown",
        name: "question22",
        title: "Enter the age at which patient's Asthma was diagnosed",
        choices: [{
          value: "IT1",
          text: "18-25 years"
        }, {
          value: "IT2",
          text: "25-35 years"
        }, {
          value: "IT3",
          text: "35-45 years"
        }, {
          value: "IT4",
          text: "45-55 years"
        }, {
          value: "IT5",
          text: " Above 55 years"
        }]
      }, {
        type: "dropdown",
        name: "question23",
        title: "Any Accidental/Emergency visits for Asthma in the past 12 months?",
        choices: [{
          value: "IT1",
          text: "Yes"
        }, {
          value: "IT2",
          text: "No"
        }]
      }, {
        type: "dropdown",
        name: "question25",
        title: "Any hospital admissions for asthma in previous 12 months?",
        choices: [{
          value: "item1",
          text: "Yes"
        }, {
          value: "item2",
          text: "No"
        }]
      }, {
        type: "dropdown",
        name: "question26",
        title: "When was the last lung test perfomed?",
        choices: [{
          value: "IT1",
          text: " < 12 Months Ago"
        }, {
          value: "IT2",
          text: " > 12 Months Ago"
        }, {
          value: "IT3",
          text: " Never"
        }]
      }, {
        type: "radiogroup",
        name: "question27",
        title: "Is the patient an active smoker?",
        choices: [{
          value: "item1",
          text: "Yes"
        }, {
          value: "item2",
          text: "No"
        }]
      }],
      title: "Asthma History"
    }]
  }, {
    name: "ADHR1",
    elements: [{
      type: "panel",
      name: "panel2",
      elements: [{
        type: "rating",
        name: "question28",
        title: "All things considered, how much of the time do you use ALL of your asthma controller medications EXACTLY as directed?",
        isRequired: true,
        rateValues: [{
          value: "IT1",
          text: "1"
        }, {
          value: "IT2",
          text: "2"
        }, {
          value: "IT3",
          text: "3"
        }, {
          value: "IT4",
          text: "4"
        }, {
          value: "IT5",
          text: "5"
        }, {
          value: "IT6",
          text: "6"
        }, {
          value: "IT7",
          text: "7"
        }, {
          value: "IT8",
          text: "8"
        }, {
          value: "IT9",
          text: "9"
        }, {
          value: "IT10",
          text: "10"
        }]
      }, {
        type: "radiogroup",
        name: "question24",
        title: "Please fill up the \"Actual Dosage\" column in the medication history table below for each of the medication listed.  Once done, look at the adherence score for each of the medication. Does any medicine has score < 80%?",
        isRequired: true,
        choices: [{
          value: "item1",
          text: "Yes"
        }, {
          value: "item2",
          text: "No"
        }]
      }],
      title: "Medication Adherence",
      isRequired: true
    }]
  }, {
    name: "ADHR2",
    elements: [{
      type: "panel",
      name: "panel3",
      elements: [{
        type: "radiogroup",
        name: "question30",
        title: "Do you have any concerns about your asthma?",
        isRequired: true,
        choices: [{
          value: "item1",
          text: "Yes"
        }, {
          value: "item2",
          text: "No"
        }]
      }],
      title: "Medication Adherence",
      isRequired: true
    }]
  }, {
    name: "ADHR3",
    elements: [{
      type: "checkbox",
      name: "question31",
      title: "What do you know about your asthma?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "Asthma is a long-term condition"
      }, {
        value: "IT2",
        text: "Asthma is caused by inflammation inside lungs"
      }, {
        value: "IT3",
        text: "Genetic and environmental factors play a role in Asthma"
      }, {
        value: "IT4",
        text: "Exposure to some factors triggers asthma"
      }, {
        value: "IT5",
        text: "Long term medication is needed for Asthma"
      }]
    }]
  }, {
    name: "ADHR4",
    elements: [{
      type: "checkbox",
      name: "question29",
      title: "What do you know about your asthma?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "Asthma is a long-term condition"
      }, {
        value: "IT2",
        text: "Asthma is caused by inflammation inside lungs"
      }, {
        value: "IT3",
        text: "Genetic and environmental factors play a role in Asthma"
      }, {
        value: "IT4",
        text: "Exposure to some factors triggers asthma"
      }, {
        value: "IT5",
        text: "Long term medication is needed for Asthma"
      }]
    }]
  }, {
    name: "ADHR5",
    elements: [{
      type: "checkbox",
      name: "question32",
      title: "How is the medication supposed to help you? (ask about each medicine from the medication history)",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "Patient understands the difference between Reliever and Preventer"
      }, {
        value: "IT2",
        text: "Patient understands how their medication works?"
      }]
    }]
  }, {
    name: "ADHR6",
    elements: [{
      type: "rating",
      name: "question34",
      title: "How well is the medication working?",
      isRequired: true
    }]
  }, {
    name: "ADHR7",
    elements: [{
      type: "checkbox",
      name: "question33",
      title: "Does the medication bother you in any way? Patient is bothered by drugs because of:",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "Side effects"
      }, {
        value: "IT2",
        text: "Beliefs"
      }, {
        value: "IT3",
        text: "Risk Perception"
      }, {
        value: "IT4",
        text: "Too many times"
      }, {
        value: "IT5",
        text: "Other Reasons (explore)"
      }]
    }]
  }, {
    name: "ADHR8",
    elements: [{
      type: "radiogroup",
      name: "question35",
      title: "Do you have difficulty remembering to use your medications?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "Yes"
      }, {
        value: "IT2",
        text: "No"
      }]
    }]
  }, {
    name: "ADHR9",
    elements: [{
      type: "radiogroup",
      name: "question36",
      title: "Do you have difficulty getting your repeats filled on time?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "Yes"
      }, {
        value: "IT2",
        text: "No"
      }]
    }]
  }, {
    name: "GCOM",
    elements: [{
      type: "radiogroup",
      name: "question37",
      title: "Patient has symptoms or diagnosis of GORD, sleep problems, obesity ",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "Yes"
      }, {
        value: "IT2",
        text: "No"
      }]
    }]
  }, {
    name: "SCOM1",
    elements: [{
      type: "radiogroup",
      name: "question38",
      title: "Does patient have hay fever?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "Yes"
      }, {
        value: "IT2",
        text: "No"
      }]
    }]
  }, {
    name: "SCOM2",
    elements: [{
      type: "radiogroup",
      name: "question39",
      title: "Does patient have current symptoms of hay fever?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "Yes"
      }, {
        value: "IT2",
        text: "No"
      }]
    }]
  }, {
    name: "RHIN1",
    elements: [{
      type: "matrix",
      name: "question40",
      title: "For each of the statements below, please circle the most appropriate response",
      isRequired: true,
      columns: [{
        value: "0",
        text: "Not at all"
      }, {
        value: "1",
        text: "Rarely"
      }, {
        value: "2",
        text: "Sometimes"
      }, {
        value: "3",
        text: "Often"
      }, {
        value: "4",
        text: "Extremely Often"
      }],
      rows: [{
        value: "OP1",
        text: "During the past week, how often did you have nasal congestions?"
      }, {
        value: "OP2",
        text: "During the past week, how often did you sneeze?"
      }, {
        value: "OP3",
        text: "During the past week, how often did you have watery eyes?"
      }, {
        value: "OP4",
        text: "During the past week, how often did you avoid any activities (e.g. visiting a house with a dog or cat or gardening) because of your nasal or other allergy symptoms?"
      }]
    }],
    title: "Rhinitis Control Assessment Test"
  }, {
    name: "RHIN2",
    elements: [{
      type: "radiogroup",
      name: "question41",
      title: "During the past week, to what extent did your nasal or other allergy symptoms interfere with your sleep?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "Not at all"
      }, {
        value: "IT2",
        text: "A little"
      }, {
        value: "item1",
        text: "Somewhat"
      }, {
        value: "item2",
        text: "A lot"
      }, {
        value: "item3",
        text: "All the time"
      }]
    }],
    title: "Rhinitis Control Assessment Test"
  }, {
    name: "RHIN3",
    elements: [{
      type: "radiogroup",
      name: "question42",
      title: "During the past week, how well were your nasal and other allergic symptoms controlled?",
      isRequired: true,
      choices: [{
        value: "IT1",
        text: "Completely"
      }, {
        value: "IT2",
        text: "Very"
      }, {
        value: "item1",
        text: "Somewhat"
      }, {
        value: "item2",
        text: "A little"
      }, {
        value: "item3",
        text: "Not at all"
      }]
    }],
    title: "Rhinitis Control Assessment Test"
  }, {
    name: "SCOM3",
    elements: [{
      type: "matrix",
      name: "question44",
      title: "Check what the patient’s current hay fever symptoms are",
      isRequired: true,
      columns: [{
        value: "Col1",
        text: "Yes"
      }, {
        value: "Col2",
        text: "No"
      }],
      rows: [{
        value: "IT1",
        text: "Is there loss of smell/facial pain/light sensitivity"
      }, {
        value: "IT2",
        text: "Is there congestion alone/mucus secretion/post-nasal drip"
      }]
    }]
  }, {
    name: "SCOM4",
    elements: [{
      type: "rating",
      name: "question43",
      title: "Check how bothersome the patient’s current hay fever symptoms are on a scale of 1-10",
      isRequired: true,
      rateValues: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      minRateDescription: "Not at all ",
      maxRateDescription: " Extremely"
    }],
    title: "Specific Comorbid Conditions - Allergic Rhinitis"
  }],
  showQuestionNumbers: "off",
  showProgressBar: "top",
  goNextPageAutomatic: true,
  pagePrevText: "Back",
  pageNextText: "Next",
  completeText: "Finish Survey"
};