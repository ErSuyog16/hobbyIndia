import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import Alrt from "./alert/alert";
import DraggedEle from "./draggedEle";

import Picture from "./picture";

const Dragdrop = (props) => {
  // const pivtreList = [
  //   {
  //     // id:1,
  //     // url:"./art_of_color.png",
  //     // position:"30px 30px",
  //     // color:'black',

  //     color: {props.color},
  //     txt: {props.txt},

  //     margin: "0px 0px",
  //     eleName: "alert",
  //     margin: `0px 0px`,
  //     id: 1,
  //     isSelected:false,
  //   },
  //   {
  //     color: {props.color},
  //     txt: {props.txt},

  //     margin: "0px 0px",
  //     eleName: "btn",
  //     margin: "0px 0px",
  //     id: 2,
  //     isSelected:false,
  //   },
  //   {
  //       color:'black',
  //       txt:"hello",
  //       display:'none'
  //   }
  // ];

  // 

  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // useEffect(() => {

  // do something here 1 sec after current has changed

  // window.addEventListener('dragend', handleMouseMove);

  // return () => {
  //   window.removeEventListener(
  //     'dragover',
  //     handleMouseMove
  //   );
  // };

  //   }, []);

  // console.log(mousePosx,mousePosy);
  // console.log(props.marginsD);
  // console.log(props.marginsR);
  // console.log(props.marginsL);
  // console.log(props.marginsU);

  const selectHandler=(id)=>{
    //  let x=id-1;
    //  pivtreList[x]=true;

    //  console.log(x);

     const som= props.pivtreList.filter(ele=> ele.id===id);
     console.log(id);
     console.log(props.pivtreList[0].id);
     som[0].isSelected=true;
     console.log(som[0].eleName);
  }

  const addImageToBoard = (id) => {
    const newpic = props.pivtreList.filter((ele) => id === ele.id);
    
    props.pivtreList.forEach(ele=>{
      ele.isSelected=false;
    })
    newpic[0].isSelected=true;

    setBoard((board) => [...board, newpic[0]]);
    

    // console.log(lst);
  };
  return (
    <div >
      <div className='pictures'>
        {props.pivtreList.map((ele) => {
          return (
            <Picture
              id={ele.id}
              eleName={ele.eleName}
              txt={ele.txt}
              color={ele.color}
              margin={ele.margin}
            />
          );
        })}
      </div>
      <div
        ref={drop}
        className='board'
        style={{ width: "500px", height: "600px", border: "2px solid black", display:'flex',overflow:'hidden' }}>
        {board.map((ele) => {
          return (
            <DraggedEle
              eleName={ele.eleName}
              txt={ele.txt}
              color={ele.color}
              isSelected={ele.isSelected}
              marginsR={props.marginsR}
              marginsL={props.marginsL}
              marginsU={props.marginsU}
              marginsD={props.marginsD}
              select={selectHandler}
              id={ele.id}
            />
            // <Alrt />
          );
        })}
      </div>

      {/* <div className='grid' style={{overflow:'hidden',width:'800px',display:'flex', flexWrap:'wrap'}}>
             <Grid/>
           </div> */}
    </div>
  );
};

export default Dragdrop;
