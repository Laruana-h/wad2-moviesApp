import {Button,Form,Input,Toast} from 'antd-mobile';
import { getAccount, login } from '../api/tmdb-api'
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import img from '../images/IMG_1619.png';

const useStyles = makeStyles((theme) => ({
    media: { height: 80,width: 80,margin:125},
}));

function Login() {
    const classes = useStyles();
    return (
        <div style={{

            "width": "450px",
            "margin": "60px auto"
        }}>
            <CardMedia
        className={classes.media}
        image={img}
        title="Filter"
      />
            <Form initialValues={{
                "username": "",
                "password": ""
            }} onFinish={(values) => {
                login(values).then(res => {
                    if (!res) {
                        Toast.show({
                            icon: 'error',
                            content: 'Wrong name or password!'
                        })
                    } else {
                        const { session_id } = res;
                        localStorage.setItem("session", session_id)
                        getAccount().then(res => {
                            localStorage.setItem("account", JSON.stringify(res))
                            localStorage.setItem("account_id", res.id)
                        })
                        Toast.show({
                            icon: "success",
                            content: "login Success!"
                        })
                        window.location.reload()
                        window.location.href("homePage")
                    }
                })
            }}>
                <Form.Item label={"Username"} name={"username"} >
                    <Input onblur="oBlur_1()"/>
                </Form.Item>
                <Form.Item label={"Password"} name={"password"} type={"password"}>
                    <Input type={"password"}/>
                </Form.Item>
                <Form.Item>
                    <Button block color='success' type='submit'>Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;