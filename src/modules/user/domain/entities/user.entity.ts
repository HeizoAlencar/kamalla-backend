
import { Uuid } from "@/shared/domain/value-objects/uuid.vo";
import { Email } from "../value-objects/email.vo";
import { Gender, UserRole } from "../enums";
import { Username } from "../value-objects/username.vo";
import { PersonName } from "../value-objects/person-name.vo";

export class UserEntity  {

    private readonly id: Uuid;
    private readonly username: Username;
    private readonly email: Email;
    private readonly passwordHash: string; 
    private readonly userRole: UserRole;
    private personName: PersonName;
    private emailVerified: boolean;
    private gender?: Gender | null | undefined;
    private birthDate?: Date | null  | undefined;
    private profilePicture?: string | null;
    private deletedAt: Date | null;
    private updatedAt: Date;
    private readonly createdAt: Date;

    private constructor(input:{
      id: Uuid,
      username: Username,
      email: Email,
      passwordHash: string,
      personName: PersonName,
      userRole: UserRole,
      emailVerified: boolean,
      createdAt: Date,
      updatedAt: Date,
      gender?: Gender | null,
      birthDate?: Date | null,
      profilePicture?: string | null,
      deletedAt: Date | null
    }) {
        this.id = input.id 
        this.username = input.username;
        this.email = input.email;
        this.passwordHash = input.passwordHash;
        this.personName = input.personName;
        this.userRole =input.userRole;
        this.emailVerified = input.emailVerified;
        this.createdAt = input.createdAt;
        this.updatedAt = input.updatedAt;
        this.gender = input.gender;
        this.birthDate = input.birthDate;
        this.profilePicture = input.profilePicture;
        this.deletedAt = input.deletedAt;
    }

    public static create(
      input: {
        id: Uuid,
        username: Username,
        email: Email,
        passwordHash: string,
        personName: PersonName,
        userRole: UserRole,
        gender?: Gender | null | undefined,
        birthDate?: Date | null,
        profilePicture?: string | null,
      }
    ): UserEntity {

        if (!input.username || !input.email || !input.passwordHash || !input.personName) {
            throw new Error('Missing required fields for user creation');
        }

        const now = new Date();


       

      const user = new UserEntity({
        emailVerified:false,
        createdAt: now,
        updatedAt: now,
        deletedAt: null,
        ...input
      });

    
        return user;
    }

    public static reconstitute(props: {
        id: Uuid;
        username: Username;
        email: Email;
        passwordHash: string;
        personName: PersonName;
        userRole: UserRole;
        emailVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
        gender?: Gender | null;
        birthDate?: Date | null;
        profilePicture?: string | null;
        deletedAt: Date | null;
    }): UserEntity {

        return new UserEntity(
            {
              ...props
            }
        );
    }

    public verifyEmail(): void {
        this.emailVerified = true;
        this.updatedAt = new Date();
    }
    
    public updateProfile(name: PersonName): void {
        this.personName = name;

        this.updatedAt = new Date();
    }
    
    public deleteUser(): void {
        this.deletedAt = new Date();
    }
    
    public getData(){
      return {
        id: this.id,
        username: this.username,
        email: this.email,
        passwordHash: this.passwordHash,
        personName: this.personName,
        userRole: this.userRole,
        emailVerified: this.emailVerified,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        gender: this.gender,
        birthDate: this.birthDate,
        profilePicture: this.profilePicture,
        deletedAt: this.deletedAt
      };
    }

    public getUsername(): string {
        return this.username.getValue();
    }
    
    public getUserRole(): UserRole {
        return this.userRole;
    }
    
    public getEmail(): string {
        return this.email.getValue();
    }
    
    public getPasswordHash(): string {
        return this.passwordHash;
    }
    
    public isEmailVerified(): boolean {
        return this.emailVerified;
    }
    
    public getCreatedAt(): Date {
        return this.createdAt;
    }
    
    public getId(): string {
        return this.id.getValue();
    }
    
    public getUpdatedAt(): Date {
        return this.updatedAt;
    }
    
    public getDeletedAt(): Date | null {
        return this.deletedAt;
    }
    
    public getFirstName(): string {
        return this.personName.getFirstName();
    }
    
    public getLastName(): string {
        return this.personName.getLastName();
    }

}