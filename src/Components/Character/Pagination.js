import React from 'react'

function Pagination({nextPage,prevPage,goToPage,pages,prevPageUrl,nextPageUrl}) {
  
    let pageButtons = [];
    for(let i = 1; i <= pages; i++){
        pageButtons.push(<button 
                            key={i} 
                            onClick={() =>goToPage(i)}>
                                {i}
                        </button>);
    }

    return (
    <div>
        {prevPageUrl && (<button onClick= {prevPage}>←</button>)}
        {pageButtons}
        {nextPageUrl && (<button onClick= {nextPage}>→</button>)}
    </div>
  );
}

export default Pagination