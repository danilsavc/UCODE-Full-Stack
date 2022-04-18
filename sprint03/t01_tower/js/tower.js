class Tower extends Building {
    constructor(floors, material, address, option) {
        super(floors, material, address);
        this.hasElevator = option;
        this.arcCapacity = option;
        this.height = option;
    }
    getFloorHeight() {
        return this.height/this.floors;
    }

    toString() {
        if (this.hasElevator === true) {
            this.hasElevator = '+';
        }
        if (this.hasElevator === false) {
            this.hasElevator = '-';
        }
        return[
            super.toString(),
            `Elevator: ${this.hasElevator}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.getFloorHeight()}`,
        ].join('\n');
    }
};
