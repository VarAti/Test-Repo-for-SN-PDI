import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '8b77c1fbbf9147e896b44ca7ed16f8c4'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '282b255367a64a41bb03eefbf149fac5'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '080882e02f5d45d191b83bbdc161ce05'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'a2fbee06c0464636832a144a98f5ea2a'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '2d170ae8b5f144b69240b8d0a6392ae4'
                    }
                }
            }
        }
    }
}
