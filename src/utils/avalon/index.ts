function useCmpt(
    name: String,
    cmptConfig: Avalon2NameSpace.ComponentConfig,
    _avalon: avalon2Static): void {

    _avalon.component(name, cmptConfig);

}

export default { useCmpt };