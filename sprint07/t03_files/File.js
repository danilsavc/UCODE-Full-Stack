const fs = require('fs');

module.exports = class {
    dir = 'tmp';

    constructor(name) {
        if (name.includes('')) {
            this.name = name;
        } 
        else {
            this.name = name + '.txt';
        }
        this.filePath = this.dir + '/' + this.name;
    }

    create() {
        try {
            fs.accessSync(this.dir, fs.constants.R_OK);
        } 
        catch (err) {
            fs.mkdirSync(this.dir);
        }

        fs.writeFile(this.filePath, '', (err) => {
            if (err) {
                console.log(err);
            } 
        });
    }

    write(content) {
        try {
            fs.accessSync(this.filePath, fs.constants.R_OK);
        } 
        catch (err) {
            this.create();
        }
        try {
            const fd = fs.openSync(this.filePath, 'a+'); // если файл не существует, создайте его
        } catch (err) {
            console.error(err);
        }
        try {
            const data = fs.appendFileSync(this.filePath, content);
        } catch (err) {
            console.error(err);
        }
    }

    read() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            return data ? data : 'File is Empty!';
        } catch (err) {
            console.error(err);
        }
        return 'No file information';
    }

    delete() {
        try {
            fs.accessSync(this.filePath, fs.constants.R_OK);
            fs.rmSync(this.filePath);
        } catch (err) {
            console.error(err);
        }
    }
}
