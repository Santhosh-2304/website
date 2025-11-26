import React from 'react'

function Block2() {
  return (
    <div className='block2'>
        <div className='block2-0'>
        <div className='block2-1'>
            <h5>Become an upskilling master</h5>
            <p>
                Close skills gaps and keep your tech talent thanks to thousands of on-demand, expert-led courses and the ability to learn at your preferred pace. And while you can’t upskill in starship ops (yet), you can master skills in just-as-popular topics, such as cloud, security, Python, Linux, DevOps, AWS, and security.
            </p>
        </div>
         <img src='src\assets\cloud-practioner.webp'  style={{borderRadius:"25px",width:"500px",height:"300px",margin:"20px 40px"}}></img>
         </div>
        <div className='block2-0'>
             <img src='src\assets\next-level-learning.webp'  style={{borderRadius:"25px",width:"500px",height:"300px",margin:"20px 40px"}}></img>
        <div className='block2-1'>
            <h5>Combine courses with labs for next-level learning </h5>
            <p>Pair in-progress skills with a secure, provisioned practice environment to improve project readiness, speed to mastery, and that all-important peace of mind for learners and leaders. You’ll also boost confidence in your team’s ability to deliver on key initiatives.</p>
        </div>
        </div>
    </div>
  )
}

export default Block2