// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Rock = (props) => {
  const { nodes, materials } = useGLTF('rock.glb')
  console.log(props)
  const rock = useRef()

  useFrame((state, delta) => {
    rock.current.rotation.y += delta * 4
  })

  return (
    <group {...props} ref={rock} dispose={null}>
      <mesh
        name='rock'
        geometry={nodes.Rock.geometry}
        material={materials.Stone}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('rock.glb')
export default Rock
