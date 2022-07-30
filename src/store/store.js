import { configureStore } from "@reduxjs/toolkit"
import { comment } from "../Redux/commentsAction";
import { dishes } from "../Redux/dishesAction";
import { promotions } from "../Redux/promotionsAction";
import { leaders } from "../Redux/leadersAction";
import {formComment} from "../Redux/formComment";
import {formLogin} from "../Redux/formLogin"
const store = configureStore({
    reducer:{
        dishes: dishes.reducer,
        comment: comment.reducer,
        promotions: promotions.reducer,
        leaders:leaders.reducer,
        formComment: formComment.reducer,
        formLogin: formLogin.reducer,
    }
})

export default store;