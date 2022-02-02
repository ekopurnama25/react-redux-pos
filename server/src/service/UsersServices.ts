import { Response, Request } from 'express';
import argon2 from "argon2";
import { getRepository } from 'typeorm';
import { Users } from '../entities/UserEntities';
import { Roles } from '../entities/RolesEntities';

class UserServices {

    static registrasiUsers = async (req: Request, res: Response) => {
        const user = new Users()
        user.username = req.body.username
        user.email = req.body.email
        user.password = await argon2.hash(req.body.password);

        if(!user){
            res.status(500).json({
                status: false,
                message: "The filling form must be filled out"
            })
        }else if(!user.username){
            res.status(500).json({
                status: false,
                message: "Username cannot be empty"
            })
        }else if(!user.email){
            res.status(500).json({
                status: false,
                message: "Email cannot be empty"
            })
        }else if(!user.password){
            res.status(500).json({
                status: false,
                message: "Password cannot be empty"
            })
        }else{
            try {
                const ResultRegis = await getRepository(Users).save(user)
                if(ResultRegis){
                    const roles = new Roles()
                    roles.id_users = ResultRegis.id_users,
                    roles.roles = "Users",
                    roles.status = "Disable"
                    await getRepository(Roles).save(roles)
                }
                res.status(201).json(ResultRegis);
            }catch(err){  
                res.status(401).json({
                    status: false,
                    message: "Users Can't Be Found"
                })
            }
        }
    }

    static getAllUsers = async (req: Request, res: Response) => {
        const getUsers = await getRepository(Users)
        .createQueryBuilder('users')
        .leftJoinAndSelect("users.roles", "roles").getMany()
       if(getUsers){
        res.status(200).json({
            status: true,
            message: "success",
            data: {
                data: getUsers
            }
        })
    }else{
        res.status(400).json({
            status: false,
            message: "Users Can't Be Found"
        })
    }
    }
}


export default UserServices;