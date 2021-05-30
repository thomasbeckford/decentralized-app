import { Center, Button, Field } from "decentraland-ui";

export default function Account({ address, balance, sendTransaction }: any) {
  return (
    <Center>
      {address ? (
        <>
          <h2>Account</h2>
          <h4>Address: {address}</h4>
          <h4>Balance: {balance}</h4>
        </>
      ) : null}

      <form onSubmit={(e) => sendTransaction(e)}>
        <Field label='Amount to send' placeholder='100' error={false} loading={false}></Field>
        <Field label='Recipient Address' placeholder={address} error={false} loading={false}></Field>
        <Button type='submit'>Send transaction</Button>
      </form>
    </Center>
  );
}
