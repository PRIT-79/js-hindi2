const books = [
    {title:'book one',genre:'fiction',publish:1981,edition:2004},
    {title:'book two',genre:'Non-fiction',publish:1991,edition:2008},
    {title:'book Three',genre:'History',publish:1999,edition:2007},
    {title:'book Four',genre:'sience',publish:2009,edition:2014},
    {title:'book five',genre:'fiction',publish:1987,edition:2010}

];

const userBooks = books.filter((bk)=> bk.genre === 'History')
    console.log(userBooks);

 const userBooks1 = books.filter((bk)=>bk.publish >=2000 && bk.edition>=2008)
 console.log(userBooks1);
    
    