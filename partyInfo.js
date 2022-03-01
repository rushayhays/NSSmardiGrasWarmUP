const objectOne= {
    party: "CJ Solar & Friends Fat Tuesday Mardi Gras Party",
    when: "Today, 7:30 AM to 9:30 PM",
    until:"In 10 hours",
    place: "3rd & Lindsley Bar & Grill, 818 3rd Ave S",
    where: "Nashville, TN"
  }
  const objectTwo= {
    party: "Room",
    when: "Today, 6:00 - 11:15 PM",
    until:"9 hours",
    place: "Rudy's Jazz Room, 809 Gleaves St",
    where: "Nashville, TN"
  }
  const objectThree= {
    party: "Fat Tuesday Party",
    when: "Today, 6 PM",
    until:"9 hours",
    place: "Mayday Brewery, 521 Old Salem Rd",
    where: "Murfreesboro, TN"
  }
  
  const objectFour = {
    party:"Fat Tuesday Pancake Supper",
  when: "Today, 5 to 7 PM",
  until: "In 8 Hours",
  place: "Saint Stephen's Anglican Church, 601 W Grundy St",
  where: "Tullahoma, TN"
  }
  const objectFive = {
    party: "FAT Tuesday & Happy Hour",
  when:"March, 15 Tue, 11 AM to 9PM",
  until: "In 14 Days",
  place:"Cajun Steamer Bar & Grill, 1175 Meridian Boulevard #Suite 108",
  where:"Franklin, TN"
  }
  const objectSix= {
    party:"MARDI GRAS PARTY!",
    when: "Tue, Mar 1, 7 PM Wed, Mar 2, 2 AM EST",
    until: "In 10 Hours",
    place: "Bar Watson, 6925 Shallowford Rd Suite 202",
    where:"Chattanooga, TN"
  }

  const partyList=[objectOne,objectTwo,objectThree,objectFour,objectFive,objectSix]

  export const getParty = () => {
      return partyList;
  }