import { HttpException, HttpStatus } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { ValidationError } from 'class-validator';

export class CustomException extends HttpException {
  constructor(message: string, status: HttpStatus) {
    super(message, status);
  }
}

export function handleDatabaseErrors(error: any): never {
  if (error instanceof QueryFailedError) {
    const dbError = error as any;
    switch (dbError.code) {
      case '23505': // Unique violation
        throw new CustomException('Duplicate entry', HttpStatus.CONFLICT);
      case '23503': // Foreign key violation
        throw new CustomException('Foreign key violation', HttpStatus.BAD_REQUEST);
      default:
        throw new CustomException('Database error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  } else {
    throw new CustomException('Unknown database error', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export function handleValidationErrors(errors: ValidationError[]): never {
  const messages = errors.map(err => Object.values(err.constraints)).flat();
  throw new CustomException(messages.join(', '), HttpStatus.BAD_REQUEST);
}

export function handleUnknownErrors(error: any): never {
  if (error instanceof HttpException) {
    throw error;
  } else {
    throw new CustomException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export function handleError(error: any): never {
  if (error instanceof QueryFailedError) {
    handleDatabaseErrors(error);
  } else if (Array.isArray(error) && error[0] instanceof ValidationError) {
    handleValidationErrors(error);
  } else {
    handleUnknownErrors(error);
  }
}
