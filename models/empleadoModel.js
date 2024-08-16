import { db } from '../config/firebase.js'

const empleadoModel = {
    getEmpleadoById: async (id) => {
        return db.collection('empleados').doc(id).get()
    },
    createEmpleado: async (empleado) => {
        return db.collection('empleados').add(em0pleado)
    },
    updateEmpleado: async (id, empleado) => {
        return db.collection('empleados').doc(id).update(empleado)
    },
    deleteEmpleado: async (id) => {
        return db.collection('empleados').doc(id).delete()
    }
}

export default empleadoModel 