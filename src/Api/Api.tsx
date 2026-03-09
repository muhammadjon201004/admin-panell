import { SVGProps, useEffect, useState } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
 export default function ApiPosts() {
  interface apiPos {
    id:number,
    title: string,
    body:string
  }
    const [api, setApi] = useState<apiPos[]>([]); 
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json: apiPos[]) => setApi(json));
    }, []);
    return api

};
