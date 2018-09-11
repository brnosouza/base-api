import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from 'sequelize-typescript';

@Table({
    freezeTableName: true,
    tableName: 'veterinary',
    timestamps: true,
    underscored: true
})
class Veterinary extends Model<Veterinary> {
    constructor() {
        super();
    }

    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
    })
    id: number;

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    uuid: string;

    @Column({
        type: DataType.STRING(50)
    })
    crmv: string;

    @Column({
        type: DataType.STRING(15)
    })
    cpf: string;

    @Column({
        type: DataType.STRING(15)
    })
    rg: string;

    @Column({
        type: DataType.STRING(150)
    })
    name: string;
}

export default Veterinary;