const Ziggy = {"url":"http:\/\/netzwelt-projector.test","port":null,"defaults":{},"routes":{"projects.index":{"uri":"projects","methods":["GET","HEAD"]},"projects.create":{"uri":"projects\/create","methods":["GET","HEAD"]},"projects.store":{"uri":"projects","methods":["POST"]},"projects.show":{"uri":"projects\/{project}","methods":["GET","HEAD"],"bindings":{"project":"id"}},"projects.edit":{"uri":"projects\/{project}\/edit","methods":["GET","HEAD"],"bindings":{"project":"id"}},"projects.update":{"uri":"projects\/{project}","methods":["PUT","PATCH"],"bindings":{"project":"id"}},"projects.destroy":{"uri":"projects\/{project}","methods":["DELETE"],"bindings":{"project":"id"}},"persons.index":{"uri":"persons","methods":["GET","HEAD"]},"persons.create":{"uri":"persons\/create","methods":["GET","HEAD"]},"persons.store":{"uri":"persons","methods":["POST"]},"persons.show":{"uri":"persons\/{person}","methods":["GET","HEAD"],"bindings":{"person":"id"}},"persons.edit":{"uri":"persons\/{person}\/edit","methods":["GET","HEAD"],"bindings":{"person":"id"}},"persons.update":{"uri":"persons\/{person}","methods":["PUT","PATCH"],"bindings":{"person":"id"}},"persons.destroy":{"uri":"persons\/{person}","methods":["DELETE"],"bindings":{"person":"id"}},"persons.password.update":{"uri":"persons\/{person}\/updatePassword","methods":["PATCH"],"bindings":{"person":"id"}},"assignments.destroyPerson":{"uri":"projects\/{project}\/assignments\/{person}","methods":["DELETE"],"bindings":{"person":"id","project":"id"}},"assignments.editPersons":{"uri":"projects\/{project}\/assignments","methods":["GET","HEAD"],"bindings":{"project":"id"}},"assignments.storePerson":{"uri":"projects\/{project}\/assignments","methods":["POST"],"bindings":{"project":"id"}},"assignments.editProjects":{"uri":"persons\/{person}\/assignments","methods":["GET","HEAD"],"bindings":{"person":"id"}},"login":{"uri":"signin","methods":["GET","HEAD"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    for (let name in window.Ziggy.routes) {
        Ziggy.routes[name] = window.Ziggy.routes[name];
    }
}

export { Ziggy };
