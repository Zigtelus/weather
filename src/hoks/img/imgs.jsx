const style1 = {
  width: '65%',
  position: 'absolute',
  top: '0',
}

const cloud = <svg style={style1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
<path d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925" transform="matrix(.77976 0 0 .78395-299.99-418.63)" fill="#4d4d4d"/>
</svg>

const cloud2 = <svg style={{...style1, right: '0px', top: '20px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
<path d="m398.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 5.202-4.643 2.925" transform="matrix(.77976 0 0 .78395-299.99-418.63)" fill="#4d4d4d"/>
</svg>


const rain = <svg style={style1} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
  <g>
    <g>
      <path d="m93.4,12.6c-10.4-4.4-22.4,0.6-26.7,11l-25.3,61.1c-4.3,10.4 0.6,22.4 11,26.7 10.4,4.3 22.4-0.6 26.7-11l25.3-61.1c4.3-10.5-0.6-22.4-11-26.7z"/>
      <path d="m225,12.6c-10.4-4.3-22.4,0.6-26.7,11l-25.3,61.1c-4.3,10.4 0.6,22.4 11,26.7 10.4,4.3 22.4-0.6 26.7-11l25.3-61.1c4.4-10.5-0.5-22.4-11-26.7z"/>
      <path d="m356.7,12.6c-10.4-4.3-22.4,0.6-26.7,11l-25.3,61.1c-4.3,10.4 0.6,22.4 11,26.7 10.4,4.3 22.4-0.6 26.7-11l25.3-61.1c4.4-10.5-0.6-22.4-11-26.7z"/>
      <path d="m488.4,12.6c-10.4-4.3-22.4,0.6-26.7,11l-25.3,61.1c-4.3,10.4 0.6,22.4 11,26.7 10.4,4.3 22.4-0.6 26.7-11l25.3-61.1c4.4-10.5-0.6-22.4-11-26.7z"/>
      <path d="m143.1,218c-10.4-4.3-22.4,0.6-26.7,11l-25.3,61.1c-4.3,10.4 0.6,22.4 11,26.7 10.4,4.3 22.4-0.6 26.7-11l25.3-61.1c4.3-10.4-0.6-22.4-11-26.7z"/>
      <path d="m274.7,218c-10.4-4.3-22.4,0.6-26.7,11l-25.3,61.1c-4.3,10.4 0.6,22.4 11,26.7 10.4,4.3 22.4-0.6 26.7-11l25.3-61.1c4.4-10.4-0.5-22.4-11-26.7z"/>
      <path d="m406.4,218c-10.4-4.3-22.4,0.6-26.7,11l-25.3,61.1c-4.3,10.4 0.6,22.4 11,26.7 10.4,4.3 22.4-0.6 26.7-11l25.3-61.1c4.4-10.4-0.6-22.4-11-26.7z"/>
      <path d="m64.6,400.6c-10.4-4.3-22.4,0.6-26.7,11l-25.3,61.1c-4.3,10.4 0.6,22.4 11,26.7 10.4,4.3 22.4-0.6 26.7-11l25.3-61.1c4.3-10.4-0.6-22.4-11-26.7z"/>
      <path d="m196.2,400.6c-10.4-4.3-22.4,0.6-26.7,11l-25.3,61.1c-4.3,10.4 0.6,22.4 11,26.7 10.4,4.3 22.4-0.6 26.7-11l25.3-61.1c4.4-10.4-0.5-22.4-11-26.7z"/>
      <path d="m327.9,400.6c-10.4-4.3-22.4,0.6-26.7,11l-25.3,61.1c-4.3,10.4 0.6,22.4 11,26.7 10.4,4.3 22.4-0.6 26.7-11l25.3-61.1c4.4-10.4-0.6-22.4-11-26.7z"/>
      <path d="m459.6,400.6c-10.4-4.3-22.4,0.6-26.7,11l-25.3,61.1c-4.3,10.4 0.6,22.4 11,26.7 10.4,4.3 22.4-0.6 26.7-11l25.3-61.1c4.4-10.4-0.6-22.4-11-26.7z"/>
    </g>
  </g>
</svg>


const sun = <svg style={{...style1, width: '50%', right: '0px'}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 456.54 456.54" enable-background='new 0 0 456.54 456.54' xmlSpace="preserve">
<g>
	<rect x="215.27" y="379.3" fill='#FFDE55' width="26" height="77.24"/>
	<rect x="215.27" fill='#FFDE55' width="26" height="77.24"/>
	
		<rect x="81.169" y="323.75" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -95.4776 685.1913)" fill='#FCEBA2' width="26" height="77.239"/>
	
		<rect x="349.372" y="55.544" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 552.0227 416.9835)" fill='#FCEBA2' width="26" height="77.239"/>
	<rect y="215.27" fill='#FFDE55' width="77.24" height="26"/>
	<rect x="379.3" y="215.27" fill='#FFDE55' width="77.24" height="26"/>
	
		<rect x="81.169" y="55.548" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -39.005 94.1686)" fill='#FCEBA2' width="26" height="77.239"/>
	
		<rect x="349.378" y="323.753" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -150.0985 362.3763)" fill='#FCEBA2' width="26" height="77.239"/>
	<circle fill='#FCEBA2' cx="228.267" cy="228.271" r="124.003"/>
	<circle fill='#FFDE55' cx="228.267" cy="228.271" r="95.142"/>
</g>
</svg>




const wind1 = <svg style={style1} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="45.864px" height="45.865px" viewBox="0 0 45.864 45.865" enable-background="new 0 0 45.864 45.865;"
	 xmlSpace="preserve">
<g>
	<g>
		<path d="M40.01,16.291c0-3.771-3.07-6.844-6.841-6.844s-6.839,3.065-6.839,6.837c0,1.078,0.874,1.95,1.951,1.95
			c1.078,0,1.951-0.874,1.951-1.952c0-1.618,1.316-2.936,2.937-2.936s2.937,1.318,2.937,2.938c0,2.147-1.746,3.896-3.896,3.896
			H1.953c-1.078,0-1.952,0.881-1.952,1.959c0,1.078,0.874,1.958,1.952,1.958h30.258C36.51,24.097,40.01,20.591,40.01,16.291z"/>
		<path d="M1.464,16.162h10.843c3.655,0,6.629-2.986,6.629-6.643c0-3.188-2.594-5.789-5.782-5.789S7.371,6.321,7.371,9.51
			c0,0.809,0.655,1.463,1.464,1.463c0.808,0,1.464-0.656,1.464-1.465c0-1.574,1.28-2.855,2.854-2.855
			c1.574,0,2.855,1.288,2.855,2.862c0,2.042-1.661,3.71-3.702,3.71H1.464C0.655,13.225,0,13.885,0,14.694S0.656,16.162,1.464,16.162
			z"/>
		<path d="M38.066,27.498H9.758c-1.077,0-1.951,0.881-1.951,1.959c0,1.077,0.874,1.957,1.951,1.957h28.308
			c2.146,0,3.895,1.739,3.895,3.887c0,1.619-1.316,2.934-2.938,2.934c-1.617,0-2.936-1.318-2.936-2.938
			c0-1.078-0.873-1.953-1.951-1.953s-1.951,0.873-1.951,1.951c0,3.771,3.067,6.84,6.838,6.84c3.771,0,6.841-3.066,6.841-6.838
			C45.864,30.995,42.366,27.498,38.066,27.498z"/>
	</g>
</g>
</svg>



 const soon = <svg style={{...style1, width: '50%', right: '0px', enableBackground: 'new 0 0 45.74 45.74'}} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 width="45.74px" height="45.74px" viewBox="0 0 45.74 45.74" xmlSpace="preserve"
 >


	<g>
		<g>
			<g>
				<path d="M12.2,15.267c0-3.322,0.896-6.43,2.448-9.113c0.376-0.649-0.191-1.451-0.918-1.265
								 C5.35,7.041-0.711,14.961,0.067,24.179c0.736,8.701,7.768,15.803,16.463,16.617c6.033,0.565,11.517-1.811,15.221-5.848
								 c0.5-0.546,0.073-1.432-0.666-1.401c-0.196,0.009-0.395,0.013-0.594,0.013C20.389,33.56,12.2,25.371,12.2,15.267z"/>
			</g>
		</g>
		<g>
			<path d="M23.144,5.6l0.917,2.633l2.788,0.061c0.354,0.008,0.498,0.456,0.218,0.669l-2.221,1.687l0.805,2.669
							 c0.104,0.338-0.279,0.614-0.568,0.414l-2.292-1.59l-2.29,1.59c-0.29,0.201-0.669-0.076-0.569-0.414l0.805-2.669l-2.221-1.687
							 c-0.28-0.213-0.134-0.661,0.218-0.669l2.788-0.061L22.44,5.6C22.556,5.267,23.027,5.267,23.144,5.6z"/>
		</g>
		<g>
			<path d="M40.26,26.44l0.881,2.53l2.679,0.057c0.389,0.009,0.549,0.502,0.24,0.737l-2.134,1.621l0.772,2.564
							 c0.111,0.371-0.309,0.677-0.627,0.454l-2.201-1.527l-2.2,1.527c-0.318,0.223-0.739-0.083-0.626-0.454l0.772-2.564l-2.133-1.621
							 c-0.31-0.234-0.149-0.729,0.238-0.737l2.679-0.057l0.884-2.53C39.612,26.074,40.131,26.074,40.26,26.44z"/>
		</g>
		<g>
			<path d="M39.926,8.098l1.325,3.799l4.021,0.086c0.452,0.01,0.639,0.584,0.278,0.858l-3.204,2.434l1.162,3.853
							 c0.131,0.433-0.356,0.788-0.729,0.529l-3.306-2.294l-3.305,2.294c-0.372,0.259-0.86-0.097-0.729-0.529l1.161-3.853l-3.205-2.434
							 c-0.358-0.273-0.172-0.849,0.279-0.858l4.022-0.086l1.324-3.799C39.173,7.672,39.776,7.672,39.926,8.098z"/>
		</g>
	</g>
</svg>





export { cloud, cloud2, rain, sun, wind1, soon }