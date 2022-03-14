const englishMusicByCity = {
    manchester: [
      {
        bandName: "The Smiths",
        memberNames: ["Morrissey", "Johnny", "Andy", "Mike"],
      },
      {
        bandName: "Joy Division",
        memberNames: ["Peter", "Stephen", "Bernard", "Ian"],
      },
    ],
  };
  console.log(`There were ${englishMusicByCity["manchester"][0]["memberNames"].length} members in ${englishMusicByCity["manchester"][0]["bandName"]}`);