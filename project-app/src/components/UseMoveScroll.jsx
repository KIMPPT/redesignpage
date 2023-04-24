import {useRef} from 'react';

function useMoveScroll(){
    let element=useRef<HTMLDivElement>(null);
    let onMoveToElement=()=>{
        element.current.scrollIntoView({behavior:'sommth', block:'start'})
    } 
    return{element,onMoveToElement};
}
export default useMoveScroll;