import React from 'react'
import {Helmet} from "react-helmet";
import "../../Component/Css/Skills.css"
import g1 from "../../Assets/1 (1).jpeg"
import g2 from "../../Assets/1 (2).jpeg"
import g3 from "../../Assets/1 (3).jpeg"
import g4 from "../../Assets/1 (4).jpeg"
import g5 from "../../Assets/1 (5).jpeg"
import g6 from "../../Assets/1 (6).jpeg"
import g7 from "../../Assets/1 (7).jpeg"
import g8 from "../../Assets/1 (8).jpeg"
import v1 from "../../Assets/1 (1).mp4"
export const Skills = () => {
  return (
	<div className='mainheading' id="Gallery">
<h3 className='pt-3 text-white'>Art Gallery</h3>
<div class="wrapper">
<div class="media">
<div class="layer">
    <p>+ Happy Client</p>
  </div>
<img src={g1} alt="" />
</div>
 <div class="media">
<div class="layer">
    <p>+ Happy Client</p>
  </div>
<img src={g4} alt="" />
</div>
   <div class="media">
<div class="layer">
    <p>+ Happy Client</p>
  </div>
<img src={g8} alt="" />
</div>
</div>
<div class="wrapper">
<div class="media">
<div class="layer">
    <p>+ Happy Client</p>
  </div>
<img src={g7} alt="" />
</div>
 <div class="media">
<div class="layer">
    <p>+ Happy Client</p>
  </div>
<img src={g5} alt="" />
</div>
   <div class="media">
<div class="layer">
    <p>+ Happy Client</p>
  </div>
<img src={g6} alt="" />
</div>

</div>

<div class="wrapper">
<div class="media">
<div class="layer">
    <p>+ Happy Client</p>
  </div>
<img src={g3} alt="" />
</div>


<div class="media">

<iframe src={v1} width="100%" height="100%"/>
</div>
<div class="media">
<div class="layer">
    <p>+Happy Client</p>
  </div>
<img src={g2} alt="" />
</div>
</div>


	</div>
  )
}
