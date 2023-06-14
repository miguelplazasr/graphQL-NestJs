import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType({description: 'Aggregations Type'})
export class AggregationsType {

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  done: number;

  @Field(() => Int)
  pending: number;

  // Se declara este campo como deprecado
  @Field(() => Int, { deprecationReason: 'Not total instead' })
  totalTodosDone: number;
}
